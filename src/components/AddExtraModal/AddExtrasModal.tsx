import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';

import addExtrasButtons from '@/json/add-extra-modal.json';
import AppModal, {AppModalProps} from '@/components/Modal/AppModal';
import {styles} from './AddExtrasModal.style';

export default function AddExtrasModal({
  visible,
  toggleOverlay,
}: AppModalProps) {
  const navigation: any = useNavigation();
  return (
    <AppModal
      style={styles.modal}
      visible={visible}
      toggleOverlay={toggleOverlay}
    >
      <View style={styles.modalView}>
        <TouchableOpacity>
          <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
        <View style={styles.buttonGroup}>
          {addExtrasButtons.map(button => {
            if (button.link) {
              return (
                <Button
                  title={button.text}
                  key={button.text}
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
                  key={button.text}
                  buttonStyle={styles.buttonStyle}
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
