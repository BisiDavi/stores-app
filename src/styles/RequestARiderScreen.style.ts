import {StyleSheet} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: 'flex-start',
  },
  unitView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  inputStyle: {
    width: 100,
  },
  spaceUp: {
    marginBottom: 50,
  },
  link: {
    color: colors.mallBlue5,
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    lineHeight: 24,
    marginLeft: 10,
    marginBottom: 5,
  },
  text: {
    marginLeft: 10,
    color: colors.black,
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
  },
});
