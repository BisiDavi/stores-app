import {useState, Dispatch, SetStateAction} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

import showToast from '@/utils/showToast';
import formatUploadedImage from '@/utils/formatUploadedImage';

type useUploadImage = Dispatch<SetStateAction<boolean>>;

export default function useUploadImage(
  setLoading: useUploadImage,
  logoName: string,
) {
  const [formDataState, setFormDataState] = useState({});
  const [image, setImage] = useState<any>(null);

  async function pickImage() {
    setLoading(true);
    await launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 250,
        selectionLimit: 1,
      },
      response => {
        if (response.didCancel) {
          showToast('your permission is need to upload an image');
        }
        if (response.assets) {
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
