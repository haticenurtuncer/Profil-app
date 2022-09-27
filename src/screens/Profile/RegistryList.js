import React, {useState} from "react";
import {Text, StyleSheet, View, FlatList} from "react-native";
import {Box, HStack, ScrollView} from "native-base";
import Header from "../../components/Header/Header";


const data = [
    {
        id: "1",
        okul: "Bilkent Üniversitesi",
        bolum: "Bilgisayar Mühendisliği",
        sure: "4",
        mezuniyettarih: "2020",
    },  {
        id: "2",
        okul: "Hacettepe Üniversitesi",
        bolum: "Bilgisayar Mühendisliği Yüksek Lisans",
        sure: "2",
        mezuniyettarih: "2022",
    }];
const Item = ({item}) => (
    <Box w={350} shadow={4} borderRadius={8} m={3} backgroundColor={"rgb(209,234,245)"} flex={1}>
        <Box m={3}>
            <HStack>
                <Text bold>Okul :</Text>
                <Text> {item.okul}</Text>
            </HStack>
            <HStack pt={2}>
                <HStack>
                    <Text bold>Bölüm :</Text>
                    <Text> {item.bolum}</Text>
                </HStack>
            </HStack>
            <HStack pt={2}>
                <HStack>
                    <Text bold>Süre :</Text>
                    <Text> {item.sure}</Text>
                </HStack>
            </HStack>
            <HStack pt={2}>
                <HStack>
                    <Text bold>Mezuniyet Tarihi :</Text>
                    <Text> {item.mezuniyettarih}</Text>
                </HStack>
            </HStack>
        </Box>
    </Box>
);

const RegistryList = () => {
    const renderItem = ({item}) => (
        <Item item={item}/>
    );
    return (
        <>


            <Box paddingTop={3} alignItems="center" flex={1}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </Box>


        </>


    );
};


export default RegistryList;
