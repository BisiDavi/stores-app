import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import AppModal, {AppModalProps} from './AppModal';
import addExtrasButtons from '@/json/add-extra-modal.json';
import {colors} from '@/utils';

export default function AddExtrasModal({
  visible,
  toggleOverlay,
}: AppModalProps) {
  const navigation: any = useNavigation();
  return (
    <AppModal visible={visible} style={styles} toggleOverlay={toggleOverlay}>
      <View>
        <TouchableOpacity>
          <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
        <View style={styles.buttonGroup}>
          {addExtrasButtons.map(button => {
            if (button.link) {
              return (
                <Button
                  title={button.text}
                  titleStyle={styles.buttonText}
                  onPress={() => navigation.navigate(button.link)}
                  type="clear"
                />
              );
            } else {
              return (
                <Button
                  titleStyle={styles.buttonText}
                  onPress={toggleOverlay}
                  title={button.text}
                />
              );
            }
          })}
        </View>
      </View>
    </AppModal>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto-Bold',
    color: colors.black,
    textAlign: 'center',
  },
  buttonGroup: {
    marginTop: 30,
  },
  buttonText: {
    fontFamily: 'Roboto-Light',
    textAlign: 'center',
  },
});
