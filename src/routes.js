import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {BackgroundWrapper} from './components/partials';
import {Home, Login, Register, Info} from './containers';

const getScenceStyle = (scene) => {
  let style = {
    backgroundColor: 'transparent'
  };
  if(scene.navigationState.index !== scene.scene.index){
    style = {
      ...style,
      opacity: 0
    }
  }
  return style;
};

export default class AppRouter extends Component {
  render(){
    return(
      <BackgroundWrapper paddingTop={0}>
        <Router getSceneStyle={getScenceStyle}>
          <Scene key="home" component={Home} initial hideNavBar/>
          <Scene key="login" component={Login} hideNavBar/>
          <Scene key="register" component={Register} hideNavBar/>
          <Scene key="info" component={Info} hideNavBar/>
        </Router>
      </BackgroundWrapper>
    );
  }
}
