import  { Animated, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Box, useColorModeValue,Pressable} from 'native-base';
import React from "react";
import RegistryList from "./RegistryList";

import ExternalServiceList from "./ExternalServiceList";
import ProfileList from "./ProfileList";

import RewardAndPenaltyList from "./RewardAndPenaltyList";

const FirstRoute = () => <ProfileList/>;

const SecondRoute = () => <RegistryList/>;
const ThirdRoute=()=> <ExternalServiceList/>;

const FourthRoute=()=> <CourseList/>;

const FifthRoute=()=><RewardAndPenaltyList/>;
const SixthRoute=()=><EducationList/>;


const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,

});

function Tabs() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'first',
            title: 'Profilim',
        },
        {
            key: 'second',
            title: 'Eğitim' ,
        },
        {
            key: 'third',
            title: 'Yabancı Dil',

        },



    ]);


    const initialLayout = {
        width: '100%',
    };

    const RenderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        return (
            <Box flexDirection="row" style={{backgroundColor:'white'}}>
                {props.navigationState.routes.map((route, i) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(inputIndex =>
                            inputIndex === i ? 1 : 0.5,
                        ),
                    });
                    const color =
                        index === i
                            ? useColorModeValue('#024F9F', '#024F9F')
                            : useColorModeValue('#1f2937', '#a1a1aa');
                    const borderColor =
                        index === i
                            ? '#024F9F'
                            : useColorModeValue('coolGray.200', 'gray.400');
                    return (
                        <Box
                            borderBottomWidth="3"
                            borderColor={borderColor}
                            flex={1}
                            style={{backgroundColor:'transparent'}}
                            alignItems="center"
                            p="3"
                            cursor="pointer">
                            <Pressable
                                onPress={() => {
                                    console.log(i);
                                    setIndex(i);
                                }}>
                                <Animated.Text
                                    style={{
                                        color,
                                    }}>
                                    {routes[i].title}
                                </Animated.Text>
                            </Pressable>
                        </Box>
                    );
                })}
            </Box>
        );
    };

    return (
        <TabView
            navigationState={{
                index,
                routes,
            }}
            renderScene={renderScene}
            renderTabBar={RenderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
                marginTop: 0,
            }}
        />
    );
}

export default Tabs;
