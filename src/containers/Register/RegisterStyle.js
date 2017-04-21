import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../theme';
import { getPlatformValue } from '../../utils';
export default StyleSheet.create({
  ...ApplicationStyles.screen,

  loginContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: getPlatformValue('android', 10, 30),
  },
  formContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: getPlatformValue('android', 5, 34)
    //backgroundColor: '#ffffff'
  }
})