import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
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
  modalView: {
    backgroundColor: colors.neutralWhite,
    height: 180,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.5,
  },
});
