import {StyleSheet, Dimensions} from 'react-native';
import colors from '@/utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width,
  },
  content: {
    alignItems: 'flex-start',
  },
  methods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.95,
  },
  method: {
    height: 120,
    width: 120,
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.mallBlue2,
    borderRadius: 20,
    margin: 15,
  },
  text: {
    color: colors.mallBlue5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
});
