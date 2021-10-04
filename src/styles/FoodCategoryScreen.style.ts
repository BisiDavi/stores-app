import {StyleSheet} from 'react-native';
import {colors} from '@/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  category: {
    height: 85,
    display: 'flex',
    borderWidth: 1,
    borderColor: colors.mallBlue2,
    borderRadius: 7,
    margin: 15,
    justifyContent: 'center',
  },
  categoryText: {
    paddingLeft: 30,
    color: colors.mallBlue5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 24,
  },
});
