import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { getStyleFromProps } from '../../utils';
import { TextFont } from '../text';
import { Colors, Metrics } from '../../theme';
export default class Button extends Component {
  render() {
    const style = {
      ...styleButton.container,
      ...getStyleFromProps(['marginTop', 'width', 'flex'], this.porps)
    };
    return(
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={[style,{backgroundColor: 'white'}]} onPress={this.props.onPress}>
          <TextFont style={styleButton.text}>
            {this.props.children}
          </TextFont>
        </TouchableOpacity>
      </View>
    );
  }
}

Button.defaultProps = {
  width: Metrics.screenWidth - Metrics.screenWidth/6
};

Button.PropTypes = {
  marginTop: PropTypes.number,
  width: PropTypes.number,
  flex: PropTypes.number,
  onPress: PropTypes.func
};

const styleButton = {
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 47,
    paddingRight: 47,
    backgroundColor: Colors.bloodOrange,
    borderRadius: 5,
    alignItems: "stretch",
    shadowColor: Colors.panther,
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 1
    }
  },
  text: {
    color: Colors.charcoal,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 3
  }
};