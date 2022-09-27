import React from 'react';
import {Box, HStack, Text} from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {TouchableOpacity} from "react-native";

const LinkButton = ({title, onPress, center}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{paddingHorizontal:20,paddingVertical:10}}>
            <HStack alignItems={'center'}>
                <Text flex={1} textAlign={center&&'center'} fontSize={'md'} color={'primary.600'} >{title}</Text>
                <Icon name={'chevron-right'} color={'#004188'} size={30} />
            </HStack>
            <Box py={1} borderColor={'primary.600'} borderBottomWidth={1}/>
        </TouchableOpacity>
    );
};

export default LinkButton;
