import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../theme';
export default StyleSheet.create({
  ...ApplicationStyles.screen,

  loginContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 69,
  },
  formContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 45,
  }
});