import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from '@rneui/themed';

import { Colors, FontSize } from '../utils/StyleConstants';

type IconsButtonProps = {
    borderColor: string,
    backGroudColor: string,
    icon: string,
    iconType?: string;
    iconColor: string,
    style?: object;
    onButtonPress: (active: any) => void;
}

const IconsButton = (props: IconsButtonProps) => {
  return (
    <TouchableOpacity
        style={{
            ...styles.iconButton,
            ...props.style,
            backgroundColor: props.backGroudColor,
            borderColor: props.borderColor
          }}
          onPress={props.onButtonPress}
    >
      <Icon name={props.icon} size={14} type={props.iconType} color={props.iconColor} />
    </TouchableOpacity>
  )
}

export default IconsButton

const styles = StyleSheet.create({
    iconButton: {
        // backgroundColor: "red",
        height: 25,
        width:25,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})