import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import GamePlayedScreen from '../dummyScreens/GamePlayedScreen';
import BadgesScreen from '../model/BadgesScreen';
import {Colors, FontSize} from '../utils/StyleConstants';

const Tab = createMaterialTopTabNavigator();

const ProfileScreenTopTabNavigation = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.purple,
        tabBarInactiveTintColor: Colors.greyText,
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        //   tabBarIndicatorStyle: { styles.tabBarIndicatorStyle},
      }}>
      <Tab.Screen
        name="Game Played"
        component={GamePlayedScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? {...styles.tabBarTitle, color: Colors.purple}
                  : styles.tabBarTitle
              }>
              Game Played
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Badges"
        component={BadgesScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={
                focused
                  ? {...styles.tabBarTitle, color: Colors.purple}
                  : styles.tabBarTitle
              }>
              Badges
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default ProfileScreenTopTabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    // height: 52,
    // backgroundColor: 'red'
    // marginTop: 10
  },
  tabBarTitle: {
    color: Colors.black,
    // textAlign: "center",
    fontSize: FontSize.medium,
    // color: Colors.greyText,
    fontFamily: 'AvenirNextLTPro-Regular',
    // marginBottom: 10,
    // fontWeight: 'bold',

    // fontWeight: "bold"
  },
  tabBarIndicatorStyle: {
    backgroundColor: Colors.purple,
  },
});
