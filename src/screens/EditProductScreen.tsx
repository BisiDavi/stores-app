import React, {useState} from 'react';
import {Formik} from 'formik';
import {View, Text, ScrollView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {Image, Button} from 'react-native-elements';

import addNewProductSchema from '@/schemas/AddNewProductSchema';
import editproductContent from '@/json/edit-product.json';
import {useUploadImage} from '@/hooks';
import {styles} from '@/styles/AddNewProductForm.style';
import displayFormElements from '@/components/Forms/displayFormElements';
import {colors} from '@/utils/.';

export default function EditProductScreen() {
  const [loading, setLoading] = useState(false);
  const {
    formDataState,
    image: productImage,
    pickImage,
  } = useUploadImage(setLoading, 'image');

  console.log('formDataState', formDataState);

  return (
    <ScrollView style={styles.container}>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <View style={styles.container}>
        <View>
          <View>
            <Image
              onPress={pickImage}
              style={styles.productImage}
              source={{uri: productImage}}
            />
          </View>
          <Text>Click on the image, to change Product image</Text>
        </View>
        <Formik
          initialValues={{
            name: '',
            categoryId: '',
            description: '',
            price: '',
            quantity: '',
          }}
          validationSchema={addNewProductSchema}
          onSubmit={(values: any) => {
            console.log('values', values);
          }}
        >
          {formik => (
            <>
              <View style={styles.formStyle}>
                {editproductContent.map(formElement =>
                  displayFormElements(formElement, formik),
                )}
                <View style={styles.buttonGroup}>
                  <Button
                    disabled={!formik.isValid}
                    title="Submit"
                    type="solid"
                    buttonStyle={styles.nextButton}
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}
