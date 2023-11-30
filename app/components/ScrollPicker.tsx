import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';

type ScrollPickerProps = {
    data:  {
        value: number,
        label: string,
      }[]
}
const ScrollPicker = (props: ScrollPickerProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  const updateSelectedItem = (index: number) => {
    setSelectedItemIndex(index);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DynamicallySelectedPicker
        items={props.data}
        onScroll={({ index }) => {
          updateSelectedItem(index);
        }}
        fontFamily='AvenirNextLTPro-Regular'
        // selectedItemBorderColor="red"
        height={300}
        width={windowWidth}
      />
      {/* <View style={{ marginTop: 50 }}>
        <Text>Selected item index {selectedItemIndex}</Text>
      </View> */}
    </View>
  );
};

export default ScrollPicker;
