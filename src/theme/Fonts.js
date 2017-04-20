import { Platform } from 'react-native';
import Colors from './Colors';
const helvetica = {
  base: 'ProximaNova-Light',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic'
};
const raleway = {
  ...Platform.select({
    ios: {
      base: 'Raleway',
      bold: 'Raleway-Bold',
      emphasis: 'HelveticaNeue-Italic',
      extraBold: 'Raleway-ExtraBold',
      extraLight: 'Raleway-ExtraLight',
      heavy: 'Raleway-Heavy',
      light: 'Raleway-Light',
      medium: 'Raleway-Medium',
      semiBold: 'Raleway-SemiBold',
      thin: 'Raleway-Thin'
    },
    android: {
      base: 'Raleway-Regular',
      bold: 'Raleway-Bold',
      emphasis: 'HelveticaNeue-Italic',
      extraBold: 'Raleway-ExtraBold',
      extraLight: 'Raleway-ExtraLight',
      heavy: 'Raleway-Heavy',
      light: 'Raleway-Light',
      medium: 'Raleway-Medium',
      semiBold: 'Raleway-SemiBold',
      thin: 'Raleway-Thin'
    }
  }),

};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
};
export default {
  helvetica,
  raleway,
  size
}
