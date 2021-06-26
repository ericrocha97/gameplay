import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 24,
  },
  guilds:{
    width: '100%',
  },
  dividerTop: {
    width: '75%',
    height: 1,
    backgroundColor: theme.colors.secondary40,
    marginTop: 2,
    marginBottom: 24,
    alignSelf: 'flex-end'
  }
});