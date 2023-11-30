import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {userData} from '../utils/DummyData';
import ProfileScreenTopTabNavigation from '../routes/ProfileScreenTopTabNavigation';
import IconsButton from '../components/IconsButton';

import GlobleStyles from '../styles/GlobleStyles';
import {Colors} from '../utils/StyleConstants';
import ProfileScreenStyle from '../styles/ProfileScreenStyle';

const ProfileScreenView = () => {
  return (
    <View style={{...GlobleStyles.appContainer, paddingHorizontal: 0}}>
      <View style={{paddingHorizontal: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Image
            style={ProfileScreenStyle.imageIcon}
            source={require('../assets/icons/Sparta.png')}
          />
          <Text style={ProfileScreenStyle.text1}>Profile</Text>
          <Image
            style={ProfileScreenStyle.imageIcon}
            source={require('../assets/icons/Msg.png')}
          />
        </View>
        <View style={ProfileScreenStyle.PImageAndIconContainer}>
          <Image
            style={ProfileScreenStyle.profileImage}
            source={require('../assets/images/ProfilePicture.jpg')}
          />
          <IconsButton
            borderColor={Colors.greyText}
            backGroudColor={Colors.white}
            icon="edit"
            iconType="font-awesome-5"
            iconColor={Colors.greyText}
            style={ProfileScreenStyle.editIcon}
            onButtonPress={() => {}}
          />

          {/* <FontAwesome5Icon
          name="edit"
          size={20}
          color={Colors.greyText}
          style={ProfileScreenStyle.editIcon}
        /> */}
        </View>

        <Text style={{...ProfileScreenStyle.text1, fontWeight: 'bold'}}>
          {userData.name}
        </Text>
        <Text style={ProfileScreenStyle.text1}>{userData.points} pts</Text>
        <Text
          style={{
            ...ProfileScreenStyle.text1,
            paddingHorizontal: 11,
            textAlign: 'left',
          }}>
          {userData.about}
        </Text>
        <TouchableOpacity style={ProfileScreenStyle.logoutButton}>
          <Image
            style={ProfileScreenStyle.imageIcon}
            source={require('../assets/icons/Logout.png')}
          />
        </TouchableOpacity>

        <View style={ProfileScreenStyle.boxContainer}>
          <View style={ProfileScreenStyle.starIconBgArc}>
            <View
              style={{
                ...ProfileScreenStyle.starUpDownIconBg,
                width: 15,
                height: 15,
                backgroundColor: Colors.lightYellow,
                marginRight: 0,
              }}>
              <Entypo name="star" size={10} color={Colors.orange} />
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View>
              <Text style={{...ProfileScreenStyle.text1, textAlign: 'auto'}}>
                Under or Over
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    ...ProfileScreenStyle.starUpDownIconBg,
                    backgroundColor: Colors.lightGreen,
                  }}>
                  <Ionicons
                    name="arrow-up-sharp"
                    size={20}
                    color={Colors.black}
                  />
                </View>
                <Text style={ProfileScreenStyle.text2}>
                  {userData.underOrOver}%
                </Text>
              </View>
            </View>
            <View>
              <Text style={{...ProfileScreenStyle.text1, textAlign: 'auto'}}>
                Top 5
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    ...ProfileScreenStyle.starUpDownIconBg,
                    backgroundColor: Colors.lightRed,
                  }}>
                  <Ionicons
                    name="arrow-down-sharp"
                    size={20}
                    color={Colors.black}
                  />
                </View>
                <Text style={ProfileScreenStyle.text2}>{userData.top5}%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{
        height: 4,
        backgroundColor: Colors.extraLightPurple
      }}></View>
      <ProfileScreenTopTabNavigation />
    </View>
  );
};

export default ProfileScreenView;
