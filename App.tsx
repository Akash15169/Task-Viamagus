import { View, Text } from 'react-native'
import React from 'react'

import GameScreen from './app/model/GameScreen'
import ProfileScreen from './app/model/ProfileScreen'
import BottomTabNavigation from './app/routes/BottomTabNavigation'
import ProfileScreenTopTabNavigation from './app/routes/ProfileScreenTopTabNavigation'

import Icon from "./app/experiment/Icon"
import ScrollPicker from"./app/experiment/ScollPicker";

const App = () => {
  return (
    // <View>
    //   <Text>App</Text>
    // </View>
    // <Icon />
    // <ScrollPicker />
    // <GameScreen />
    // <ProfileScreen />
    <BottomTabNavigation />
    // <ProfileScreenTopTabNavigation />

  )
}

export default App