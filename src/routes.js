import React, { Component } from 'react';
import { Home } from './containers';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Colors, Images } from './theme';
import { Router, Scene, Actions as NavigationActions } from 'react-native-router-flux';

const Styles = {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.background,
  },
  dashboardNavBar: {
    flex:1,
    backgroundColor: Colors.background,
  },
  title: {
    color: Colors.snow
  },
  leftButton: {
    tintColor: Colors.transparent
  },
  rightButton: {
    color: Colors.snow
  },
  navTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownOptions: {
    marginTop: 33,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 60,
    height: 30
  },
  logout: {
    color: Colors.white,
    marginLeft: 10,
    marginTop: -5
  }
};

export default class AppRouter extends Component {
  render() {
    return (
      <Router navigationBarStyle={Styles.navBar} titleStyle={Styles.navTitle} hideNavBar>
        <Scene key="home" component={Home} title="Oliya" hideNavBar={true}  />
      </Router>
    );
  }
}
