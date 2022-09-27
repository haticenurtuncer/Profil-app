import React from "react";
import { Button, Center, HStack, Input } from "native-base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

const TextInput = ({value,onChangeText,placeholder,onPress,search,onPressFilter,filter}) => {
  return (
    <Center mt={6}>
      {
        search ?
          <HStack alignItems={'center'} mx={filter&&5}>
            <Input flex={filter&&1} InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={onPress}>
              <Icon name={'magnify'} size={27} color={'white'}/>
            </Button>} value={value} onChangeText={onChangeText} shadow={1} backgroundColor={'gray.50'}
                   borderRadius={14}
                   mr={filter&&1}
                   w={{
                     base: "90%",
                     md: "25%",
                   }} placeholder={placeholder}/>
            {
              filter &&
              <TouchableOpacity onPress={onPressFilter}>
                <Icon name="tune" color={"#004188"} size={35}  />
              </TouchableOpacity>
            }
          </HStack>
          :
          <Input h={45} value={value} onChangeText={onChangeText} shadow={1} backgroundColor={'gray.50'}
                 borderRadius={14}
                 w={{
                   base: "90%",
                   md: "25%",
                 }} placeholder={placeholder}/>
      }
    </Center>
  );
};

export default TextInput;
