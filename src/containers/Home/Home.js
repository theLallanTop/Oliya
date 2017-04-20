import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './HomeStyle';
class Home extends Component {

  render() {
    return (
      <View style={styles.homeViewContainer}>
        <Text>Home Page</Text>
      </View>
    );
  }
}
export default Home;