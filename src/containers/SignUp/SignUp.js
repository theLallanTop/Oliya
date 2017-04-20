import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './SignUpStyle';
class SignUp extends Component {

  render() {
    return (
      <View style={styles.signupViewContainer}>
        <Text>Sign Up</Text>
      </View>
    );
  }
}
export default SignUp;