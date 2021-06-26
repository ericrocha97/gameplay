import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 15,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
  }
});