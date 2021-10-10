import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useQueryClient} from 'react-query';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

import colors from '@/utils/colors';
import productExtras from '@/json/add-product-extras.json';
import PromoTagForm from './PromoTagForm';
import {InputGroup} from '@/components/FormElements';
import {RootState} from '@/store/RootReducer';
import {addProductsRequest} from '@/network/postRequest';
import showToast from '@/utils/showToast';
import {SubmitProductAction} from '@/store/actions/addProductAction';
import {styles} from './AddProductOtherDetailsForm.style';
import DisplayStoreExtras from './DisplayStoreExtras';

export default function AddProductOtherDetailsForm({navigation}: any) {
  const [loading, setLoading] = useState(false);
  const [submitAddProduct, setSubmitAddProduct] = useState(false);
  const queryClient = useQueryClient();
  const [showPromoTag, setShowPromoTag] = useState(false);
  const [productFields, setProductFields] = useState<any>({});
  const [isProductAvailable, setIsProductAvailable] = useState<any>({
    isAvailable: true,
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
    if (submitAddProduct) {
      addProductsRequest(productFields)
        .then(response => {
          setLoading(false);
          showToast(response.data.message);
          console.log('product added', response.data.message);
          setSubmitAddProduct(false);
          dispatch(SubmitProductAction(false));
          queryClient.invalidateQueries('allProducts');
          navigation.navigate('ProductScreen');
        })
        .catch(error => {
          console.log('error', error);
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
  }, [navigation, productFields, dispatch, submitAddProduct, queryClient]);

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
      storeId: storeProfile.id,
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
        <DisplayStoreExtras name="Main" />
        <DisplayStoreExtras name="Secondary" />
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
        <View style={styles.promoTagView}>
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
