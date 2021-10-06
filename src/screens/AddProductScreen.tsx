import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';
import {Image} from 'react-native-elements';
import {useSelector} from 'react-redux';

import useUploadImage from '@/hooks/useUploadImage';
import AddNewProductForm from '@/components/Forms/AddNewProductForm';
import {colors, showToast} from '@/utils/.';
import {ProgressIndicator, Fab} from '@/components/.';
import {uploadProductImageRequest} from '@/network/postRequest';
import {DrawerStackParamList} from '@/customTypes/.';
import {RootState} from '@/store/RootReducer';
import {styles} from '@/styles/AddProductScreen.style';

export type AddProductScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'AddProductScreen'
>;

type Props = {
  navigation: AddProductScreenNavigationProps;
};

export default function AddProductScreen({navigation}: Props) {
  const [loading, setLoading] = useState(false);
  const {submitProduct} = useSelector((state: RootState) => state.addProduct);
  const {
    formDataState,
    image: productImage,
    pickImage,
  } = useUploadImage(setLoading, 'image');

  console.log('submitProduct', submitProduct);

  useEffect(() => {
    let uploadOnce = true;
    const isFormDataStateEmpty = Object.keys(formDataState).length > 0;
    if (isFormDataStateEmpty && uploadOnce && submitProduct) {
      async function uploadImage() {
        return await uploadProductImageRequest(formDataState)
          .then(response => {
            setLoading(false);
            showToast(response.data.message);
          })
          .catch(error => {
            console.log('uploadImage error', error);
            let errorMessage;
            if (error.request) {
              console.log('error.request', error.request);
              errorMessage = error.request._response;
            }
            showToast(errorMessage);
          });
      }
      uploadImage();
    }
    return () => {
      uploadOnce = false;
    };
  }, [formDataState, submitProduct]);

  return (
    <ScrollView>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <View style={styles.container}>
        <View style={styles.progressIndicatorView}>
          <ProgressIndicator
            style={styles.progressIndicator}
            selected={1}
            title="Step 1: Product Details"
            total={2}
          />
        </View>
        <View style={styles.uploadProductImage}>
          {!productImage ? (
            <View style={styles.FabView}>
              <View style={styles.fabContainer}>
                <Fab onPress={pickImage} />
              </View>
              <Text>Upload Product Picture</Text>
            </View>
          ) : (
            <Image
              onPress={pickImage}
              style={styles.productImage}
              source={{uri: productImage}}
            />
          )}
        </View>
        <AddNewProductForm navigation={navigation} />
      </View>
    </ScrollView>
  );
}
