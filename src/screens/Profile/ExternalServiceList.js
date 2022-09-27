import React from "react";
import {FlatList} from "react-native";
import {Box, HStack, Text} from "native-base";

const data = [
    {
        id: "1",
        dil: "İngilizce",
        duzey: "B2",
    }, {
        id: "2",
        dil: "Almanca",
        duzey: "A1",
    }]
const Item = ({item}) => (
    <Box w={350} shadow={4} borderRadius={8} m={3} backgroundColor={'blue.600'} flex={1} >
        <Box m={3}>
            <HStack >
                <Text bold>Dil :</Text>
                <Text> {item.dil}</Text>
            </HStack>
            <HStack pt={2}>
                <HStack>
                    <Text bold>Düzey :</Text>
                    <Text> {item.duzey}</Text>
                </HStack>
            </HStack>
        </Box>
    </Box>
);


const ExternalServiceList = () => {

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


export default ExternalServiceList;
