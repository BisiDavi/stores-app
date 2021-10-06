import React, {useEffect, useState} from 'react';
import {CheckBox} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

import colors from '@/utils/colors';
import productExtras from '@/json/add-product-extras.json';
import PromoTagForm from './PromoTagForm';
import InputGroup from '@/components/InputGroup';
import {RootState} from '@/store/RootReducer';
import {addProductsRequest} from '@/network/postRequest';
import showToast from '@/utils/showToast';
import {SubmitProductAction} from '@/store/actions/addProductAction';
import {getAllStoreExtrasRequest} from '@/network/getRequest';

interface DisplayCheckboxProps {
  title: {
    name: string;
    isCompulsory: boolean;
    _id: string;
    price: string;
  };
}

type storeExtrasType = {
  name: string;
  isCompulsory: boolean;
  _id: string;
  price: string;
}[];

function DisplayCheckbox({title}: DisplayCheckboxProps) {
  const [addExtra, setAddExtra] = useState(false);
  const extrasTitle = `${title.name} (${title.price})`;
  function toggleCheckBox() {
    return setAddExtra(!addExtra);
  }
  return (
    <CheckBox checked={addExtra} title={extrasTitle} onPress={toggleCheckBox} />
  );
}

export default function AddProductOtherDetailsForm({navigation}: any) {
  const [loading, setLoading] = useState(false);
  const [submitAddProduct, setSubmitAddProduct] = useState(false);
  const [storesExtras, setStoresExtras] = useState<storeExtrasType>([]);
  const [showPromoTag, setShowPromoTag] = useState(false);
  const [productFields, setProductFields] = useState<any>({});
  const [isProductAvailable, setIsProductAvailable] = useState<any>({
    isAvailable: null,
    duration: {
      from: 0,
      to: 0,
    },
  });
  const {product}: any = useSelector((state: RootState) => state.addProduct);
  const {storeProfile}: any = useSelector(
    (state: RootState) => state.storeProfile,
  );
  const dispatch = useDispatch();
  const {productAvailabilty} = productExtras;

  useEffect(() => {
    let renderOnce = true;
    getAllStoreExtrasRequest()
      .then(response => {
        if (renderOnce) {
          setStoresExtras(response.data.data);
        }
      })
      .catch(error => {
        if (error.request) {
          showToast('oops, an error occurred, unable to fetch stores extras');
        } else if (error.response) {
          showToast(error.response?.data?.message);
        }
      });
    return () => {
      renderOnce = false;
    };
  }, []);

  useEffect(() => {
    if (submitAddProduct) {
      addProductsRequest(productFields)
        .then(response => {
          setLoading(false);
          showToast(response.data.message);
          setSubmitAddProduct(false);
          dispatch(SubmitProductAction(false));
          navigation.navigate('ProductScreen');
        })
        .catch(error => {
          setLoading(false);
          setSubmitAddProduct(false);
          dispatch(SubmitProductAction(false));
          if (error.request) {
            showToast(
              'Oops network is bad, unable to submit, please try again',
            );
          } else if (error.response) {
            console.log('error.response', error.response.data.message);
            showToast(error.response.data.message);
          }
        });
    }
  }, [navigation, productFields, dispatch, submitAddProduct]);

  const mainExtras = storesExtras.filter(
    extras => extras.isCompulsory === true,
  );
  const secondaryExtras = storesExtras.filter(
    extras => extras.isCompulsory === false,
  );

  const {from} = isProductAvailable.duration;

  function submitProduct() {
    setLoading(true);
    dispatch(SubmitProductAction(true));
    setProductFields({
      ...productFields,
      ...product,
      duration: from,
      isAvailable: isProductAvailable.isAvailable,
      kg: 0,
      takeAwayPrice: Number(product.takeAwayPrice),
      quantity: 1,
      price: Number(product.price),
      storeId: storeProfile._id,
    });
    setSubmitAddProduct(true);
  }

  function isAvailableHandler(status: boolean) {
    return setIsProductAvailable({
      ...isProductAvailable,
      isAvailable: status,
    });
  }

  function goBack() {
    navigation.goBack();
  }

  function promoTagFormHandler() {
    setShowPromoTag(!showPromoTag);
  }
  return (
    <>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <View style={styles.form}>
        <View>
          <Text style={styles.extra}>Main Extras</Text>
          <View style={styles.checkboxView}>
            {mainExtras.map(extra => (
              <DisplayCheckbox key={extra._id} title={extra} />
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.extra}>Secondary Extras</Text>

          <View style={styles.checkboxView}>
            {secondaryExtras.map(extra => (
              <DisplayCheckbox key={extra._id} title={extra} />
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.promoTagText}>
            Is {product.name} always available?
          </Text>
          <View
            style={{
              ...styles.buttonGroup,
              ...styles.productAvailabiltyButtonGroup,
            }}
          >
            <View style={styles.buttonView}>
              <View style={styles.productButtonGroup}>
                <Button
                  onPress={() => isAvailableHandler(true)}
                  type="outline"
                  buttonStyle={styles.backButton}
                  titleStyle={styles.backButtonTitle}
                  title="Yes"
                />
                <Button
                  onPress={() => isAvailableHandler(false)}
                  buttonStyle={styles.nextButton}
                  title="No"
                />
              </View>
              {isProductAvailable.isAvailable === null && (
                <Text style={styles.error}>
                  Product Availablity is required
                </Text>
              )}
            </View>
          </View>
          {!isProductAvailable.isAvailable && (
            <View>
              <InputGroup
                value={isProductAvailable.duration}
                onChangeText={(name: string, value: string) =>
                  setIsProductAvailable({
                    ...isProductAvailable,
                    duration: {
                      ...isProductAvailable.duration,
                      [name]: value,
                    },
                  })
                }
                inputGroup={productAvailabilty}
              />
            </View>
          )}
        </View>
        <View>
          <TouchableOpacity onPress={promoTagFormHandler}>
            <Text style={styles.promoTagText}>Add Promo Tag</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.promoTagForm}>
          {showPromoTag && <PromoTagForm />}
        </View>
        <View style={styles.buttonGroup}>
          <Button
            title="Back"
            type="solid"
            titleStyle={styles.backButtonTitle}
            onPress={() => goBack()}
            buttonStyle={styles.backButton}
          />
          <Button
            title="Submit"
            type="solid"
            onPress={submitProduct}
            buttonStyle={styles.nextButton}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 0,
    margin: 0,
    width: '100%',
  },
  buttonView: {
    flexDirection: 'column',
  },
  checkboxView: {},
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.mallBlue5,
  },
  backButton: {
    borderWidth: 1,
    borderColor: colors.mallBlue5,
    backgroundColor: 'transparent',
    width: 100,
    borderRadius: 10,
  },
  backButtonTitle: {
    color: colors.mallBlue5,
  },
  promoTagText: {
    color: colors.accentRed,
    fontFamily: 'Roboto-Bold',
    margin: 10,
  },
  promoTagForm: {
    marginTop: 0,
  },
  extra: {
    color: colors.black,
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    letterSpacing: 0.0025,
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
    margin: 10,
    marginTop: 0,
  },
  productButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '86%',
    margin: 10,
    marginTop: 0,
    marginLeft: 0,
  },
  error: {
    color: colors.accentRed,
    fontSize: 13,
    marginLeft: 10,
  },
  productAvailabiltyButtonGroup: {
    marginTop: 5,
  },
});
