import React from 'react';
import SvgWrapper from '@utils/SvgWrapper';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface EyeSvgProps {
  onPress: () => void;
}

export default function EyesSvg({onPress}: EyeSvgProps) {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';

  return (
    <TouchableOpacity onPress={onPress}>
      <SvgWrapper svg={svg} width="18px" />
    </TouchableOpacity>
  );
}
