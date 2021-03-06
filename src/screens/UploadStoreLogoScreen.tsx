import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import useStoreSetupNavigation from '@/hooks/useStoreSetupNavigation';
import UploadIcon from '@/assets/upload.png';
import {colors, showToast} from '@/utils/.';
import ProgressIndicator from '@/components/ProgressIndicator/ProgressIndicator';
import {StoreLogoUploadAction} from '@/store/actions/StoreDetailsAction';
import usePostRequest from '@/network/postRequest';
import useUploadImage from '@/hooks/useUploadImage';
import {styles} from '@/styles/UploadStoreLogoScreen.style';

export default function UploadStoreLogoScreen() {
  const [loading, setLoading] = useState(false);
  const {
    formDataState,
    image: storeLogo,
    pickImage,
  } = useUploadImage(setLoading, 'logo');
  const {onBoardingNextScreen} = useStoreSetupNavigation();
  const dispatch = useDispatch();
  const {uploadStoreLogoRequest} = usePostRequest();

  const isFormDataStateEmpty = Object.values(formDataState);

  async function uploadImage() {
    if (isFormDataStateEmpty.length === 0) {
      showToast('No logo selected, Please select a logo');
    } else {
      dispatch(StoreLogoUploadAction(formDataState));
      setLoading(true);
      await uploadStoreLogoRequest(formDataState)
        .then(response => {
          console.log('response', response.data.message);
          setLoading(false);
          showToast(response.data.message);
          onBoardingNextScreen(5, false);
        })
        .catch(error => {
          console.log('uploadImage error', error);
          let errorMessage;
          if (error.request) {
            console.log('error.request', error.request);
            errorMessage = error.request._response;
          }
          showToast(errorMessage);
          setLoading(false);
        });
    }
  }

  async function skipImage() {
    return onBoardingNextScreen(6, true);
  }

  return (
    <SafeAreaView style={styles.view}>
      <Spinner visible={loading} color={colors.cloudOrange5} />
      <ScrollView style={styles.view}>
        <View style={styles.container}>
          <ProgressIndicator title="Upload Store's Logo" selected={4} />
          <View style={styles.content}>
            <Text style={styles.description}>
              This Logo will represent your store on the user's app
            </Text>
            {!storeLogo ? (
              <>
                <TouchableOpacity onPress={pickImage}>
                  <View style={styles.imageView}>
                    <Image style={styles.uploadIcon} source={UploadIcon} />
                  </View>
                </TouchableOpacity>
                <Text style={styles.error}>
                  to upload your logo, click on the icon above
                </Text>
              </>
            ) : (
              <TouchableOpacity onPress={pickImage}>
                <Image
                  style={styles.logo}
                  onPress={pickImage}
                  source={{uri: storeLogo}}
                />
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
