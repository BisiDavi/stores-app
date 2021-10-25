/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';
import {Image} from 'react-native-elements';

import FreshFoodProductForm from '@/components/Forms/FreshFoodProductForm';
import useUploadImage from '@/hooks/useUploadImage';
import {colors, showToast} from '@/utils/.';
import {ProgressIndicator, Fab} from '@/components/.';
import {DrawerStackParamList} from '@/customTypes/.';
import {styles} from '@/styles/FreshFoodProductScreen.style';
import usePostRequest from '@/network/postRequest';

type FreshFoodProductScreenNavigationProps = StackNavigationProp<
  DrawerStackParamList,
  'FreshFoodProductScreen'
>;

type Props = {
  navigation: FreshFoodProductScreenNavigationProps;
};

export default function FreshFoodProductScreen({navigation}: Props) {
  const [loading, setLoading] = useState(false);
  const [uploadImageStatus, setUploadImageStatus] = useState(false);
  const {uploadProductImageRequest} = usePostRequest();

  const {
    formDataState,
    image: productImage,
    pickImage,
  } = useUploadImage(setLoading, 'image');
  console.log('uploadImageStatus', uploadImageStatus);

  async function uploadImage() {
    await uploadProductImageRequest(formDataState)
      .then(response => {
        console.log('response', response.data.message);
        setLoading(false);
        if (
          response.data.message.includes('Product image uploaded successfully')
        ) {
          setUploadImageStatus(true);
        }
      })
      .catch(error => {
        console.log('uploadImage error', error);
        if (error.request) {
          console.log('error.request', error.request);
          showToast('Oops,poor network, unable to upload product image');
        } else if (error.response) {
          showToast(error.response.data.message);
        }
      });
    return;
  }

  useEffect(() => {
    const isFormDataStateEmpty = Object.keys(formDataState).length > 0;
    console.log('isFormDataStateEmpty', isFormDataStateEmpty);
    if (isFormDataStateEmpty && !uploadImageStatus) {
      uploadImage();
    }
  }, [uploadImageStatus]);

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
              <Text>Upload Fresh food Picture</Text>
            </View>
          ) : (
            <Image
              onPress={pickImage}
              style={styles.productImage}
              source={{uri: productImage}}
            />
          )}
        </View>
        <FreshFoodProductForm navigation={navigation} />
      </View>
    </ScrollView>
  );
}
