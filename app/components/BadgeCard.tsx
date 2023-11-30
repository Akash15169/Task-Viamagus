import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {Colors, FontSize} from '../utils/StyleConstants';

type BadgeCardProps = {
  image: string;
  title: string;
  description: string;
  style?: object;
  cardCount?: number;
};

const BadgeCard = (props: BadgeCardProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.badgeCard,
        ...props.style,
      }}>
      <View style={styles.imageView}>
        <Image style={styles.image} source={{uri: props.image}} />
      </View>
      <View style={styles.TDContainer}>
        <Text style={styles.title}>
          {props.title}
          {props.cardCount ? (
            <Text style={{...styles.title, color: Colors.orange}}>
              {' '}
              x {props.cardCount}
            </Text>
          ) : null}
        </Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {props.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BadgeCard;

const styles = StyleSheet.create({
  badgeCard: {
    height: 100,
    width: '100%',
    borderWidth: 2,
    borderColor: Colors.lightPurpleBorder,
    backgroundColor: Colors.white,
    padding: 16,
    flexDirection: 'row',

    borderRadius: 8,
    // alignItems: "center"
  },
  TDContainer: {
    // justifyContent: "flex-start",
    // backgroundColor: "red"
    width: '60%',
  },
  imageView: {
    width: '20%',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 35,
    marginRight: 16,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: Colors.golden,
  },
  title: {
    // textAlign: "center",
    fontSize: FontSize.small,
    color: Colors.black,
    fontFamily: 'AvenirNextLTPro-Regular',
    marginTop: 2,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  description: {
    // textAlign: "center",
    fontSize: FontSize.small,
    // color: Colors.greyText,
    fontFamily: 'AvenirNextLTPro-Regular',
    // marginBottom: 10,
  },
});
