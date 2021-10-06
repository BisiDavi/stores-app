import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import AppModal, {AppModalProps} from '../Modal/AppModal';
import addExtrasButtons from '@/json/add-extra-modal.json';
import {styles} from './AddExtrasModal.style';

export default function AddExtrasModal({
  visible,
  toggleOverlay,
}: AppModalProps) {
  const navigation: any = useNavigation();
  return (
    <AppModal visible={visible} toggleOverlay={toggleOverlay}>
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
