import React from 'react';
import {
  StyleSheet,
  PermissionsAndroid,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import ScrollPicker from './ScrollPicker';
import CustomButton from './CustomButtom';

import { scrollingData } from '../utils/DummyData';

import {Colors, FontSize} from '../utils/StyleConstants';

type BottomModalProps = {
    bottomModalVisible: boolean;
    setBottomModalVisible: (active: any) => void;
}

const BottomModal = (props: BottomModalProps) => {
  const options = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 0,
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.bottomModalVisible}>
      <View style={styles.bottom}>
        <View style={styles.modalView}>
          <Text style={styles.modalHeading}>
            Your Prediction is Under
          </Text>
          <Text style={styles.text1}>
            ENTRY TICKETS
          </Text>
          <ScrollPicker
            data={scrollingData}
          />



          <Text style={styles.text2}>You can win</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
            <Text style={styles.text3}>$2000</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text2}>Total </Text>
              <FontAwesomeIcon
                name="circle"
                size={20}
                color={Colors.golden}
                style={styles.icon}
              />
              <Text style={{...styles.text3, color: Colors.black}}>5</Text>
            </View>
          </View>
          <CustomButton
              color={Colors.purple}
              text="Submit my prediction"
              // style
              onButtonPress={props.setBottomModalVisible}
            />
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  bottom: {
    postion: 'relative',
    // flex: 1,
    height: '100%',
    // justifyContent: 'flex-end',
    backgroundColor: 'rgba(52,52,52,0.5)',
    // marginBottom: 20
  },

  modalView: {
    position: 'absolute',
    height: '60%',
    width: '100%',
    backgroundColor: '#fff',
    // backgroundColor: "red",
    // alignSelf: 'baseline',
    padding: 20,
    bottom: 0,
    // justifyContent: 'space-around',
    // alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeading: {
    fontSize: FontSize.large,
    color: Colors.black,
    fontFamily: "AvenirNextLTPro-Regular",
    fontWeight: "bold",
    marginBottom: 20
  },
  text1: {
    color: Colors.greyText,
    fontSize: FontSize.medium,
    fontFamily: "AvenirNextLTPro-Regular",
  },
  text2: {
    color: Colors.greyText,
    fontSize: FontSize.small,
    fontFamily: "AvenirNextLTPro-Regular",
  },
  text3: {
    color: Colors.green,
    fontSize: FontSize.medium,
    fontFamily: "AvenirNextLTPro-Regular",
  },
  icon: {
    marginHorizontal: 6, 
  },
  modalTextBtn: {
    // fontSize: FontSize.Large,
    // color: Colors.primary,
  },
  modalTextCloseBtn: {
    // fontSize: FontSize.Large,
    color: 'red',
  },
});

{
  /* <PickImageBottomsheet
  bottomsheetVisible={bottomsheetVisible}
  setBottomsheetVisible={setBottomsheetVisible}
  handleImageArray={handleImageArray}
  color={colorMode}
/>; */
}
