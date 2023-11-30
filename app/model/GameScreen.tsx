import React, { useState} from 'react'
import { View, Text } from 'react-native'

import GameScreenView from '../view/GameScreenView'

const GameScreen = () => {

  const [bottomModalVisible, setBottomModalVisible] = useState(false);

  return (
    <GameScreenView
      bottomModalVisible={bottomModalVisible}
      setBottomModalVisible={setBottomModalVisible}

    />
  )
}

export default GameScreen