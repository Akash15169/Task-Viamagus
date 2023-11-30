import React from 'react';
import {View, Text, Platform} from 'react-native';

// import { Icon } from '@rneui/themed';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {ProgressView} from '@react-native-community/progress-view';
import * as Progress from 'react-native-progress';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {players} from '../utils/DummyData';

import UOButton from '../components/UOButton';
import BottomModal from '../components/BottomModal';

import GlobleStyles from '../styles/GlobleStyles';
import GameScreenStyle from '../styles/GameScreenStyle';
import {Colors, FontSize} from '../utils/StyleConstants';

type GameScreenViewProps = {
    bottomModalVisible: boolean
    setBottomModalVisible: (active: any) => void;
}

const GameScreenView = (props: GameScreenViewProps) => {
  const progressCount =
    players.predictedUnder / (players.predictedUnder + players.predictedOver);
  return (
    <View style={GlobleStyles.appContainer}>
      <Text style={GameScreenStyle.heading}>Today's Games</Text>
      <View style={GameScreenStyle.mainBox}>
        <View style={GameScreenStyle.pruplePart}>
          <View style={{...GameScreenStyle.rowSpaceBetween, marginBottom: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={GameScreenStyle.purplePartText1}>UNDER OR OVER</Text>
              <FeatherIcon
                name="info"
                size={18}
                color={Colors.white}
                style={GameScreenStyle.infoIcon}
              />
            </View>
            <View style={GameScreenStyle.rowSpaceBetween}>
              <Text style={GameScreenStyle.purplePartText2}>Starting in</Text>
              <FontAwesome5Icon
                name="clock"
                size={18}
                color={Colors.white}
                style={GameScreenStyle.clockIcon}
              />
              <Text style={GameScreenStyle.purplePartText1}>03:23:12</Text>
            </View>
          </View>
          <Text style={GameScreenStyle.purplePartText1}>
            Bitcoin price will be under
          </Text>
          <View style={GameScreenStyle.onlyRow}>
            <Text
              style={{...GameScreenStyle.purplePartText3, fontWeight: 'bold'}}>
              $24,524{' '}
            </Text>
            <Text style={GameScreenStyle.purplePartText3}>
              at 7 a ET on 22nd Jan'21
            </Text>
          </View>
        </View>
        <View style={GameScreenStyle.whitePart}>
          <View
            style={{
              ...GameScreenStyle.onlyRow,
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <View>
              <Text style={GameScreenStyle.whitePartText1}>PROZE POOL</Text>
              <Text style={GameScreenStyle.whitePartText2}>$12,000</Text>
            </View>
            <View>
              <Text style={GameScreenStyle.whitePartText1}>UNDER</Text>
              <Text style={GameScreenStyle.whitePartText2}>3.25x</Text>
            </View>
            <View>
              <Text style={GameScreenStyle.whitePartText1}>OVER</Text>
              <Text style={GameScreenStyle.whitePartText2}>1.25x</Text>
            </View>
            <View>
              <Text style={GameScreenStyle.whitePartText1}>ENTRY FEES</Text>
              <View
                style={{
                  ...GameScreenStyle.onlyRow,
                  justifyContent: 'flex-end',
                  alignItems: "center"
                }}>
                <Text style={GameScreenStyle.whitePartText2}>5</Text>
                <FontAwesomeIcon
                name="circle"
                size={20}
                color={Colors.golden}
                style={GameScreenStyle.icon}
              />
              </View>
            </View>
          </View>
          <Text style={GameScreenStyle.whitePartText3}>
            What's your prediction?
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <UOButton
              color={Colors.brown}
              text="Under"
              icon="arrow-down"
              iconType='entypo'
              // style
              onButtonPress={() => console.log('Pressed')}
            />
            <UOButton
              color={Colors.purple}
              text="Over"
              icon="arrow-up"
              iconType='entypo'
              // style
              onButtonPress={() => {props.setBottomModalVisible(true)}}
            />
          </View>
        </View>
        <View style={GameScreenStyle.greyPart}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome5Icon
                name="user-alt"
                size={20}
                color={Colors.black}
              />
              <Text style={GameScreenStyle.greyPartText1}>
                {players.predictedUnder + players.predictedOver} Players
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome5Icon
                name="chart-area"
                size={20}
                color={Colors.black}
              />
              <Text style={GameScreenStyle.greyPartText1}>View chart</Text>
            </View>
          </View>
          <Progress.Bar
            progress={progressCount}
            width={340}
            color={Colors.pink}
            unfilledColor={Colors.blue}
            borderColor={Colors.white}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={GameScreenStyle.greyPartText2}>
              {players.predictedUnder}Predicted under
            </Text>
            <Text style={GameScreenStyle.greyPartText2}>
              {players.predictedOver}Predicted over
            </Text>
          </View>
        </View>
      </View>
      <BottomModal
        bottomModalVisible={props.bottomModalVisible}
        setBottomModalVisible={() => {props.setBottomModalVisible(false)}}
        // color={'red'}
      />
    </View>
  );
};

export default GameScreenView;
