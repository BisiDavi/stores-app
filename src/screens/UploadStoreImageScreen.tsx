import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import useStoreSetupNavigation from '@/hooks/useStoreSetupNavigation';
import useUploadImage from '@/hooks/useUploadImage';
import ProgressIndicator from '@/components/ProgressIndicator';
import UploadIcon from '@/assets/upload.png';
import {colors, showToast} from '@/utils/.';
import {StoreImageUploadAction} from '@/store/actions/StoreDetailsAction';
import {uploadStoreBackgroundRequest} from '@/network/postRequest';
import {styles} from '@/styles/UploadStoreImageScreen.style';

export default function UploadStoreImageScreen() {
  const [loading, setLoading] = useState(false);
  const {onBoardingNextScreen} = useStoreSetupNavigation();
  const dispatch = useDispatch();
  const {formDataState, image, pickImage} = useUploadImage(
    setLoading,
    'background',
  );

  async function uploadImage() {
    setLoading(true);
    dispatch(StoreImageUploadAction(formDataState));
    return uploadStoreBackgroundRequest(formDataState)
      .then(response => {
        setLoading(false);
        showToast(response.data.message);
        onBoardingNextScreen(6, true);
      })
      .catch(error => {
        setLoading(false);
        showToast('Oops,unable to upload image, an error occured');
        console.log('error', error);
      });
  }

  async function skipImage() {
    onBoardingNextScreen(6, true);
  }

  return (
    <SafeAreaView style={styles.view}>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <ScrollView>
        <View style={styles.container}>
          <ProgressIndicator title="Upload Store's Image" selected={4} />
          <View style={styles.content}>
            <Text style={styles.description}>
              This image will appear as your store front on the user's app
            </Text>
            {!image ? (
              <>
                <View style={styles.imageView}>
                  <TouchableOpacity onPress={pickImage}>
                    <Image style={styles.uploadIcon} source={UploadIcon} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.error}>
                  please upload an image, click on the icon above
                </Text>
              </>
            ) : (
              <TouchableOpacity onPress={pickImage}>
                <Image style={styles.image} source={{uri: image}} />
              </TouchableOpacity>
            )}
            <View>
              <Button
                onPress={uploadImage}
                buttonStyle={styles.nextButton}
                title="Upload"
              />
              <Button
                buttonStyle={styles.skipButton}
                titleStyle={styles.skipText}
                onPress={skipImage}
                title="Skip"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
