import React from 'react';
import { Text, View, Button, Image } from "native-base";
import {useNavigation} from '@react-navigation/native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../../general/colors";
import styles from "./HomeHeader.styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";

const HomeHeader = ({title,main}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation()

  return (
    <View style={[styles.container,{paddingTop: Platform.OS==='android' ?insets.top+10 :insets.top}]}>
      <View style={styles.titleView}>
        <Button
          onPress={() => {
            navigation.openDrawer();
          }}
          style={styles.button}
        >
          <Icon name={'menu'} size={25} color={color.titleColor}/>
        </Button>
        <View style={{flex:1,alignItems:'center'}}>

        </View>
       {/* <Button
          onPress={() => {
            navigation.navigate('AppNavigation',{screen:'Notification'});
          }}
          style={styles.button}
        >
          <Icon name={'bell'} size={25} color={color.titleColor}/>
        </Button>*/}
      </View>
    </View>
  )
}

export default HomeHeader
