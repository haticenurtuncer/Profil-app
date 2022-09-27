import React from 'react';
import { TouchableOpacity } from "react-native";
import { Text } from "native-base";

const UnitListItem = ({ item,index, onPress,DATA}) => (
  <TouchableOpacity onPress={onPress} style={{
    padding:20,
    borderBottomWidth: index < DATA.length-1 ? 1 : 0,
    borderBottomColor: '#cccccc',
    marginHorizontal:15,
    width: '90.5%',
  }} >
    <Text fontSize={"md"} style={{color:'black'}}>{item.title}</Text>
  </TouchableOpacity>
);

export default UnitListItem;
