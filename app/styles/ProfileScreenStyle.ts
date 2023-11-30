import { StyleSheet } from 'react-native'
import { Colors, FontSize } from "../utils/StyleConstants";

export default StyleSheet.create({
    imageIcon: {
        // width: 50,
        // height: 50,
    },
    text1: {
        textAlign: "center", 
        fontSize: FontSize.medium,
        color: Colors.greyText,
        fontFamily: "AvenirNextLTPro-Regular",
        marginBottom: 10

        // fontWeight: "bold"
    },
    PImageAndIconContainer: {
        width: 80,
        height: 80,
        alignSelf: "center"        

    },
    profileImage: {
        alignSelf: "center",
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10

    },
    editIcon: {
        position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15

    },
    logoutButton: {
        marginVertical: 10,
        alignSelf: "center"
    },
    boxContainer: {
        margin: 20,
        borderWidth: 1,
        borderColor: Colors.lightGreyText,
        borderRadius: 6,
        padding: 20

    },
    starIconBgArc: {
        position: 'absolute',
        top: -15,
        right: "50%",
        left: "50%",
        bottom: 0,

        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 4,
        // borderColor: Colors.golden,
        borderRightColor: "rgba(255, 255, 255, 0.1)",
        borderTopColor: Colors.golden,
        borderLeftColor: Colors.golden,
        borderBottomColor: Colors.golden,
        justifyContent: "center",
        alignItems: "center",
    },
    starUpDownIconBg: {
        width: 26,
        height: 26,
        borderRadius: 13,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 7

    },
    text2: {
        // textAlign: "center", 
        fontSize: FontSize.large,
        color: Colors.black,
        fontFamily: "AvenirNextLTPro-Regular",
        fontWeight: "bold",
        // marginBottom: 10

        // fontWeight: "bold"
    },

})