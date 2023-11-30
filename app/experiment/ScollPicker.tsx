// import React, { Component } from 'react';
// import { Text } from 'react-native';
// import ScrollPicker from 'react-native-wheel-scrollview-picker';

// export default class SimpleExample extends Component {
//   render() {
//     return (
//       <ScrollPicker
//         dataSource={['1', '2', '3', '4', '5', '6']}
//         selectedIndex={3}
//         // renderItem={(data, index) => {
//         //   //
//         //   <Text>{data}</Text>
//         // }}
//         onValueChange={(data, selectedIndex) => {
//           //
//         }}
//         wrapperHeight={130}
        
//         // wrapperWidth={150}
//         // wrapperColor='#FFFFFF'
//         itemHeight={60}
//         highlightColor='#d8d8d8'
//         highlightBorderWidth={2}
//       />
//     );
//   }
// }


// import React, { useState } from 'react';
// import { View, Text, Dimensions } from 'react-native';

// import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';

// const ScrollPicker = () => {
//   const [selectedItemIndex, setSelectedItemIndex] = useState(0);
//   const windowWidth = Dimensions.get('window').width;

//   const updateSelectedItem = (index: number) => {
//     setSelectedItemIndex(index);
//   };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <DynamicallySelectedPicker
//         items={[
//           {
//             value: 1,
//             label: 'Item 1',
//           },
//           {
//             value: 2,
//             label: 'Item 2',
//           },
//           {
//             value: 3,
//             label: 'Item 3',
//           },
//           {
//             value: 4,
//             label: 'Item 4',
//           },
//           {
//             value: 5,
//             label: 'Item 5',
//           },
//         ]}
//         onScroll={({ index }) => {
//           updateSelectedItem(index);
//         }}
//         fontFamily='AvenirNextLTPro-Regular'
//         // selectedItemBorderColor="red"
//         height={300}
//         width={windowWidth}
//       />
//       {/* <View style={{ marginTop: 50 }}>
//         <Text>Selected item index {selectedItemIndex}</Text>
//       </View> */}
//     </View>
//   );
// };

// export default ScrollPicker;



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HighlightedTextLine = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is a line with{' '}
        <Text style={styles.highlightedText}>highlighted text</Text> in it.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: 'black', // Set the color of the regular text
  },
  highlightedText: {
    color: 'red', // Set the color of the highlighted text
    fontWeight: 'bold', // You can customize other styles as needed
  },
});

export default HighlightedTextLine;
