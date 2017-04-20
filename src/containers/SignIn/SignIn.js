import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Button } from 'native-base';
import styles from './SignInStyle';
import { Actions as NavActions } from 'react-native-router-flux';
class SignIn extends Component {
  onPressSigninBtn = () => {
    NavActions.home();
  };
  render() {
    return (
      <Container>
        <Content>
         /* <Image style={{ }} source={} /> */

          <Button light block
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 100,
                    marginLeft: 20,
                    marginRight: 20
                  }}
                  onPress={this.onPressSigninBtn}>
            <Text style={styles.signBtnTextStyle}>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default SignIn;