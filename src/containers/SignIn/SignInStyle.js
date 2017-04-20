import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts, Colors } from '../../theme';
export default StyleSheet.create({
  ...ApplicationStyles.screen,

  signinViewContainer: {
    flex:1,
  },
  signBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  signBtnTextStyle: {
    fontSize: Fonts.size.regular,
    textAlign: 'center'
  },
})