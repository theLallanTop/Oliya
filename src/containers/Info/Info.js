import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
//import {} from 'native-base';

export default class Info extends Component {
  render(){
   return(
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Info</Text>
     </View>
   );
  }
}