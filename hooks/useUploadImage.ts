import {useState, Dispatch, SetStateAction} from 'react';
import ImagePicker from 'react-native-image-picker';

import showToast from '@utils/showToast';
import formatUploadedImage from '@utils/formatUploadedImage';

type useUploadImage = Dispatch<SetStateAction<boolean>>;

export default function useUploadImage(
  setLoading: useUploadImage,
  logoName: string,
) {
  const [formDataState, setFormDataState] = useState({});
  const [image, setImage] = useState<any>(null);

  async function pickImage() {
    setLoading(true);
    await ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 250,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('response.errormessages', response.errorMessage);
          showToast('We need you to upload your store logo');
        }
        if (response.assets) {
          console.log('response.assets', response.assets[0]);
          let formData = formatUploadedImage(logoName, response.assets[0]);
          setFormDataState(formData);
          setImage(response.assets[0].uri);
        }
      },
    );
    setLoading(false);
  }

  return {
    pickImage,
    image,
    formDataState,
  };
}
