import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View, Text, Dimensions, ScrollView} from 'react-native';
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
import {TouchableOpacity} from 'react-native-gesture-handler';

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

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  nextButton: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: colors.mallBlue5,
    width: 270,
  },
  imageView: {
    height: Dimensions.get('window').height * 0.35,
    width: Dimensions.get('window').width * 0.75,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderColor: colors.mallBlue5,
    borderWidth: 1,
    borderRadius: 5,
  },
  skipButton: {
    borderColor: colors.mallBlue5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: 270,
  },
  skipText: {
    color: colors.mallBlue5,
  },
  image: {
    height: 250,
    width: 300,
    margin: 20,
  },
  uploadIcon: {
    height: 25,
    width: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'left',
    marginTop: 0,
  },
  description: {
    fontSize: 14,
    textAlign: 'left',
    fontFamily: 'Roboto-Regular',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  error: {
    color: colors.accentRed,
    fontSize: 12,
    marginBottom: 10,
  },
});
