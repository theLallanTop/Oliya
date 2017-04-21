import { Platform } from 'react-native';

export function getStyleFromProps(propStyleKeys = [], props ={}) {

  let style = {};

  propStyleKeys.map((propStyleKey) =>{
    const propStyleValue = props[propStyleKey];
    if(propStyleValue !== undefined && propStyleValue !== null && propStyleValue !== false){
      style = {
        ...style,
        [propStyleKey]: propStyleValue
      }
    }
    return propStyleKey;
  });

  if(props.style){
    style = {
      ...style,
      ...props.style
    }
  }
  return style;
}

export function getPlatformValue(os, value, valueDefault) {
  if(Platform.OS === os) return value;
  return valueDefault
}