import React from 'react';
import { View, Image, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import navigation from "./index";

const DrawerContent =(props)=> {
  return (
   <View style={{flex:1}}>
     <DrawerContentScrollView {...props}>

       <DrawerItemList {...props}/>
     </DrawerContentScrollView>
     <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
       <TouchableOpacity style={{flexDirection:'row',alignItems:'center',paddingVertical:15}} onPress={()=>props.navigation.navigate('AuthNavigation')}>
         <Icon name={'exit-to-app'} size={22} color={'#636364'}/>
         <Text style={{color:'#636364',fontSize:15,marginLeft:5}}>Çıkış Yap</Text>
       </TouchableOpacity>

     </View>
   </View>
  );
}

export default DrawerContent;
