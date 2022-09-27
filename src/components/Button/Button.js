import React from 'react';
import {Box, Center, Text} from "native-base";
import {TouchableOpacity} from "react-native";

const Button = ({title, onPress,outline,blue, ...otherProps}) => {
    return (
        <Box {...otherProps} w={'100%'} h={50} borderRadius={19} bg={outline?'white': blue ?'primary.600':'primary.400'} borderWidth={outline && 2} borderColor={outline && 'primary.600'} justifyContent={'center'}>
            <TouchableOpacity onPress={onPress}>
                <Text fontWeight={600} fontSize={'md'} fontFamily={'Poppins-Bold'} color={outline?'primary.600':'white'} textAlign={'center'}>{title}</Text>
            </TouchableOpacity>
        </Box>
    );
};

export default Button;
