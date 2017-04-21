import React, {Component, PropTypes} from 'react';
import {View, Text, Image, StyleSheet, Alert, Animated} from 'react-native';
import { Button, Input } from '../../components/form';
import {Logo, BackgroundWrapper, AlertStatus} from '../../components/partials';
import { Heading } from '../../components/text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions, ActionConst} from 'react-native-router-flux';
import loginStyle from './LoginStyle';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    animation: {
      usernamePostionLeft: new Animated.Value(795),
      passwordPositionLeft: new Animated.Value(905),
      loginPositionTop: new Animated.Value(1402),
      statusPositionTop: new Animated.Value(1542)
    }
  };

  handleChangeInput(stateName, text) {
    this.setState({
      [stateName]: text
    })
  }

  handePressSignIn = () => {
    Alert.alert('Button pressed', 'User sign in');
  };

  handlePressSignUp = () => {
    Actions.register();
  };

  handleToHome = () => {
    Actions.home({type: ActionConst.RESET, disableInteractionCheck: true})
  };

  componentDidMount() {
    const timing = Animated.timing;
    Animated.parallel([
      timing(this.state.animation.usernamePostionLeft, {
        toValue: 0,
        duration: 700
      }),
      timing(this.state.animation.passwordPositionLeft, {
        toValue: 0,
        duration: 900
      }),
      timing(this.state.animation.loginPositionTop, {
        toValue: 0,
        duration: 700
      }),
      timing(this.state.animation.statusPositionTop, {
        toValue: 0,
        duration: 700
      })

    ]).start()
  }

  render() {
    return(
      <BackgroundWrapper transparent iconLeft="home" onPressIcon={this.handleToHome}>
      <View style={loginStyle.loginContainer}>
        <Logo/>
        <Heading marginTop={16} color="#ffffff" textAlign="center">
          {'Oliya'}
        </Heading>
        <View style={loginStyle.formContainer}>
          <Animated.View style={{position: 'relative', left: this.state.animation.usernamePostionLeft}}>
            <Input label="Username"
                   icon={<Icon name="user"/>}
                   value={this.state.username}
                   onChange={this.handleChangeInput.bind(this, 'username')}
            />
          </Animated.View>
          <Animated.View style={{position: 'relative', left: this.state.animation.passwordPositionLeft}}>
            <Input label="Password"
                   icon={<Icon name="key"/>}
                   value={this.state.password}
                   marginTop={15}
                   onChange={this.handleChangeInput.bind(this, 'password')}
                   secureTextEntry
            />
          </Animated.View>
          <Animated.View style={{position: 'relative', top: this.state.animation.loginPositionTop, marginTop: 10}}>
            <Button marginTop={60} onPress={this.handePressSignIn}>
              Sign in
            </Button>
          </Animated.View>

        </View>
      </View>
      <Animated.View style={{position: 'relative', top: this.state.animation.statusPositionTop}}>
        <AlertStatus textHelper="Don't have account" textAction="Sign up"
                     onPressAction={this.handlePressSignUp}/>
      </Animated.View>

    </BackgroundWrapper>
    );
  }
}