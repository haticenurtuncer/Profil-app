import React, {useState} from 'react';
import {View, SafeAreaView,Animated} from "react-native";
import Header from "../../components/Header/Header";
import {Box, Image, ScrollView, Text} from "native-base";


const ProfileList = () => {

    const data = [{
        title: "Ad Soyad",
        value: "Hatice Nur TUNCER"
    }, {
        title: "Doğum Tarihi",
        value: "22 Ocak 1997"
    }, {
        title: "Doğum Yeri",
        value: "Diyarbakır"
    }, {
        title: "Ünvan",
        value: "Mühendis"
    }, {
        title: "Ünvan Kod",
        value: "660"
    }, {
        title: "Sendika",
        value: "Yok"
    }, {
        title: "Sicil No",
        value: "220197"
    }]


    return (
        <>

            <ScrollView style={{flex: 1, marginBottom: 15}}>

                <View style={{marginHorizontal: 20}}>
                    {
                        data.map(item => {
                            return (
                                <View style={{margin: 5, borderBottomWidth:0.2}}>
                                    <View>
                                        <Text style={{
                                            fontWeight: '500',
                                            fontSize: 15,
                                            color: '#777777'
                                        }}>{item.title}</Text>
                                    </View>
                                    <View>
                                        <Text style={{
                                            fontWeight: '700',
                                            fontSize: 17,
                                            color: '#444444'
                                        }}>{item.value && item.value.length > 0 ? item.value : '-'}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default ProfileList;
