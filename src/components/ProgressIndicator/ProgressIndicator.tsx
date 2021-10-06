import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './ProgressIndicator.style';

interface ProgressIndicator {
  selected: number;
  total?: number;
  style?: any;
  title: string;
}

export default function ProgressIndicator({
  selected,
  total = 4,
  style,
  title,
}: ProgressIndicator) {
  const numberofIndicators = new Array(total).fill('');

  return (
    <View style={styles.progressView}>
      <Text style={styles.title}>{title}</Text>
      <View style={{...styles.progressIndicator, ...style}}>
        {numberofIndicators.map((_, index) => {
          const indicatorStyle =
            index < selected ? styles.selected : styles.notSelected;
          return (
            <View style={{...styles.bar, ...indicatorStyle}} key={index} />
          );
        })}
      </View>
    </View>
  );
}
