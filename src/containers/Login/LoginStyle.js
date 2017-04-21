import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../theme';
import { getPlatformValue } from '../../utils';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  loginContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 49,
  },
  formContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: getPlatformValue('android', 25, 45)
  }
})