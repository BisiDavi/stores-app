import React from 'react';
import {TouchableOpacity} from 'react-native';
import SvgWrapper from '../utils/SvgWrapper';

type InfoSvgProps = {
  showModal?: () => void;
};

export default function InfoSvg({showModal}: InfoSvgProps) {
  const svg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 3.33301C10.9185 3.33301 10.6005 3.4647 10.3661 3.69912C10.1317 3.93354 10 4.25149 10 4.58301C10 4.91453 10.1317 5.23247 10.3661 5.46689C10.6005 5.70131 10.9185 5.83301 11.25 5.83301C11.5815 5.83301 11.8995 5.70131 12.1339 5.46689C12.3683 5.23247 12.5 4.91453 12.5 4.58301C12.5 4.25149 12.3683 3.93354 12.1339 3.69912C11.8995 3.4647 11.5815 3.33301 11.25 3.33301ZM10.95 7.30801C9.95834 7.39134 7.25 9.54967 7.25 9.54967C7.08334 9.67467 7.13334 9.66634 7.26667 9.89967C7.4 10.1247 7.38334 10.1413 7.54167 10.033C7.70834 9.92467 7.98334 9.74967 8.44167 9.46634C10.2083 8.33301 8.725 10.9497 7.96667 15.358C7.66667 17.5413 9.63334 16.4163 10.1417 16.083C10.6417 15.758 11.9833 14.833 12.1167 14.7413C12.3 14.6163 12.1667 14.5163 12.025 14.308C11.925 14.1663 11.825 14.2663 11.825 14.2663C11.2833 14.6247 10.2917 15.3747 10.1583 14.8997C10 14.4247 11.0167 11.1663 11.575 8.92467C11.6667 8.39134 11.9167 7.22467 10.95 7.30801Z" fill="#F29100"/>
</svg>`;

  return (
    <TouchableOpacity onPress={showModal}>
      <SvgWrapper svg={svg} width="18px" />
    </TouchableOpacity>
  );
}
