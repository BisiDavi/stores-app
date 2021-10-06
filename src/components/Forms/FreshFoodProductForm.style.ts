import {StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.mallBlue5,
  },
  backButton: {
    borderWidth: 1,
    borderColor: colors.mallBlue5,
    backgroundColor: 'transparent',
    width: 100,
    borderRadius: 10,
  },
  backButtonTitle: {
    color: colors.mallBlue5,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
    margin: 10,
    marginTop: 10,
  },
  formView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadProductImage: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  fabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 70,
    marginTop: 30,
  },
  productImage: {
    height: 150,
    width: 200,
    marginBottom: 20,
  },
  FabView: {
    height: 160,
    width: 160,
    backgroundColor: colors.neutral3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
