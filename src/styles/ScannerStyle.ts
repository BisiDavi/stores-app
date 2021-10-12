import horzScale from '@/utils/misc/horzScale';
import {colors} from '@/utils/misc/colors';
const {BRAND_BLUE, BRAND_BLUE_RGB, TRANSPARENT} = colors;

type scannerStyle = {
  containerWidth: any;
  lineOffset: any;
  containerHeight: any;
};

export default function scannerStyle({
  containerWidth,
  lineOffset,
  containerHeight,
}: scannerStyle) {
  const hIWidth = containerWidth / 2;
  const hIHeight = hIWidth;
  const hBLength = hIWidth / 4;
  const hBRadius = horzScale(0);
  const hBThickness = horzScale(2.5);
  const guardOffset = (-1 * hBThickness) / 2;
  const bgOpacity = 0.2;

  return {
    container: {
      width: '100%',
      height: '100%',
    },
    camera: {
      width: containerWidth,
      height: containerHeight,
    },
    hotspot: {
      width: containerWidth,
      height: containerHeight,
      backgroundColor: TRANSPARENT,
      borderColor: BRAND_BLUE_RGB.replace('rgb', 'rgba').replace(
        ')',
        `,${bgOpacity})`,
      ),
      borderTopWidth: (containerHeight - hIHeight) / 2,
      borderBottomWidth: (containerHeight - hIHeight) / 2,
      borderLeftWidth: (containerWidth - hIWidth) / 2,
      borderRightWidth: (containerWidth - hIWidth) / 2,
    },
    borders: {
      tl: {
        position: 'absolute',
        top: guardOffset,
        left: guardOffset,
        height: hBLength,
        width: hBLength,
        borderTopLeftRadius: hBRadius,
        borderLeftWidth: hBThickness,
        borderTopWidth: hBThickness,
        borderColor: BRAND_BLUE,
      },
      tr: {
        position: 'absolute',
        top: guardOffset,
        right: guardOffset,
        height: hBLength,
        width: hBLength,
        borderTopRightRadius: hBRadius,
        borderRightWidth: hBThickness,
        borderTopWidth: hBThickness,
        borderColor: BRAND_BLUE,
      },
      bl: {
        position: 'absolute',
        bottom: guardOffset,
        left: guardOffset,
        height: hBLength,
        width: hBLength,
        borderBottomLeftRadius: hBRadius,
        borderLeftWidth: hBThickness,
        borderBottomWidth: hBThickness,
        borderColor: BRAND_BLUE,
      },
      br: {
        position: 'absolute',
        bottom: guardOffset,
        right: guardOffset,
        height: hBLength,
        width: hBLength,
        borderBottomRightRadius: hBRadius,
        borderRightWidth: hBThickness,
        borderBottomWidth: hBThickness,
        borderColor: BRAND_BLUE,
      },
    },
    line: {
      position: 'absolute',
      backgroundColor: TRANSPARENT,
      top: 0,
      left: hBLength / 2,
      height: hBThickness,
      width: hIWidth - hBLength,
      transform: [
        {
          translateY: lineOffset.interpolate({
            inputRange: [0, 1],
            outputRange: [0, hIHeight - hBThickness],
          }),
        },
      ],
    },
  };
}
