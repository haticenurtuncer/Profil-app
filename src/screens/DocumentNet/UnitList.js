import React from "react";
import Header from "../../components/Header/Header";
import { Box } from "native-base";

import { FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const UnitList = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const renderItem = ({ item, index }) => {
    return (
      <UnitListItem
        DATA={DATA}
        item={item}
        index={index}
        onPress={() => console.log("hello")}
      />
    );
  };

  return (
    <>
      <Header title={"BelgeNet Birimler"} />
      <Box style={{ flex: 1, marginBottom: insets.bottom }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </>
  );
};

export default UnitList;
