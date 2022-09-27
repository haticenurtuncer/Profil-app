import React from 'react';
import { Text, View, Button, Box } from "native-base";
import {useNavigation} from '@react-navigation/native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../general/colors";
import styles from "./Header.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";

const Header = ({title,menu}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation()

  return (
    <Box bg="primary.50" style={[styles.container,{paddingTop: Platform.OS==='android' ?insets.top+10 :insets.top}]}>
      <Box style={styles.titleView}>
        <Button
          onPress={() => {
            if(menu){
              navigation.openDrawer()
            }else{
              navigation.pop()
            }
          }}
          style={styles.button}
        >
          <Icon name={menu?'menu':'arrow-left'} size={25} color={color.titleColor}/>
        </Button>
        <Text color="primary.100" bold style={styles.title}>{title}</Text>
      </Box>
    </Box>
  )
}

export default Header
