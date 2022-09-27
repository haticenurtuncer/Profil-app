import React from "react";
import {ActivityIndicator} from "react-native";
import {Box} from "native-base";

const Loading = () => {
    return(
        <Box flex={1} alignItems={'center'} justifyContent={'center'}>
            <ActivityIndicator color={'#004188'} size={'large'}/>
        </Box>
    )
}

export default Loading;
