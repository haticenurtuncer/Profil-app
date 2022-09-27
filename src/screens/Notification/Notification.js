import React from 'react';
import { Text, View } from "react-native";
import Header from "../../components/Header/Header";

const Notification = () => {
  return(
    <>
      <Header title={'Bildirim'}/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bildirim Page</Text>
      </View>
    </>
  )
}

export default Notification;
