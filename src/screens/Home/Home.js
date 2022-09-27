import React from 'react';
import {Button, Text, TouchableOpacity, View} from "react-native";
import HomeHeader from "../../components/Header/HomeHeader";
import {Center, HStack, Image, Input} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Tabs from "../Profile/ProfileTabBar";
const ProfileImage = require('../../assets/images/profile.png');

const Home = ({value, onChangeText, placeholder, onPress, search, onPressFilter, filter}) => {
    return (
        <>
            <HomeHeader title={'Anasayfa'} main={true}/>

            <View style={{alignItems: 'center', padding: 20}}>
                <Image alt='profile' source={ProfileImage} style={{height: 100, width: 100}}/>
            </View>
            <Tabs/>
        </>
    )
}

export default Home;
