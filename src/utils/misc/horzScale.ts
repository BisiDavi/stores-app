import {Dimensions} from 'react-native';

const BASE_WIDTH = 392.73;
const BASE_HEIGHT = 774.91;

export default function horzScale(size: number) {
  const {width, height} = Dimensions.get('window');
  if (width > height) {
    console.warn(height);
    return (height / BASE_HEIGHT) * size;
  }
  return (width / BASE_WIDTH) * size;
}
