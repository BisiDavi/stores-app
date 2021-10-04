import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

import colors from '@/utils/colors';
import InputField from '@/components/InputField';
import {addProductsCategories} from '@/network/postRequest';
import {showToast} from '@/utils';
import {styles} from '@/styles/AddProductCategoryScreen.style';

export default function AddProductCategoryScreen() {
  const [productCategory, setProductCategory] = useState('');
  const [loading, setLoading] = useState(false);

  function inputHandler(value: any) {
    return setProductCategory(value);
  }

  function submitHandler() {
    setLoading(true);
    addProductsCategories({name: productCategory})
      .then(response => {
        setLoading(false);
        showToast(response.data.message);
      })
      .catch(error => {
        setLoading(false);
        if (error.response) {
          showToast(error.response.data.message);
        } else if (error.request) {
          showToast('Oops, network error');
        }
      });
  }

  return (
    <>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <View style={styles.container}>
        <View style={styles.form}>
          <InputField
            value={productCategory}
            onChangeText={inputHandler}
            label="Add Product Category"
          />
          <View style={styles.buttonViewStyle}>
            <Button
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonText}
              title="Add Product Category"
              onPress={submitHandler}
            />
          </View>
        </View>
      </View>
    </>
  );
}
