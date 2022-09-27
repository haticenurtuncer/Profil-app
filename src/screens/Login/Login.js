import React from 'react';
import { Button, ImageBackground,Text, View } from "react-native";
import { Image,Box } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import color from '../../general/colors'

const Login = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return(
    <>
      <ImageBackground source={require('../../assets/images/ruya2.png')} style={{ flex: 1, justifyContent: 'center'}}>
      <Box  pt={insets.top}>
       {/* <Box flex={1} alignItems="center" justiftContent="center">
          <Image source={require('../../assets/images/ruya.png')}  alt="ruya1" resizeMode="contain" />
        </Box>*/}
        <Box m={2}>
          <Button title={' Hoşgeldiniz'}  color={"#94a3b8s" }   onPress={()=>navigation.navigate('AppNavigation')}/>
        </Box>
      </Box>
      </ImageBackground>
    </>
  )
}

export default Login;
