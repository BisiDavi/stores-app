import React from 'react';
import SvgWrapper from '@/utils/SvgWrapper';
import SVgProps from '@/customTypes/svgTypes';

export default function DashboardSvg({color}: SVgProps) {
  const svg = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 2V4H12V2H16ZM6 2V8H2V2H6ZM16 10V16H12V10H16ZM6 14V16H2V14H6ZM18 0H10V6H18V0ZM8 0H0V10H8V0ZM18 8H10V18H18V8ZM8 12H0V18H8V12Z" fill=${color} />
  </svg>`;

  return <SvgWrapper svg={svg} width="18px" />;
}
