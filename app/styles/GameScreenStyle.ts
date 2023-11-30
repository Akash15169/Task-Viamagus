import { StyleSheet } from "react-native";
import { Colors, FontSize } from "../utils/StyleConstants";

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        // backgroundColor: Colors.white,
        // backgroundColor: "green",
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    heading: {
        fontSize: FontSize.large,
        color: Colors.black,
        fontFamily: "AvenirNextLTPro-Regular",
        fontWeight: "bold"
    },
    mainBox: {
        paddingVertical: 20,
        paddingHorizontal: 4,

    },
    pruplePart: {
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: Colors.purple,

    },
    rowSpaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    onlyRow: {
        flexDirection: "row",
    },
    purplePartText1: {
        color: Colors.lightPurpleText,
        fontSize: FontSize.medium,
        fontFamily: "AvenirNextLTPro-Regular",        
    },
    infoIcon: {
        marginLeft: 5,
    },
    purplePartText2: {
        // marginTop: 3,
        // marginRight: 4,
        color: Colors.white,
        fontSize: FontSize.small,
        fontFamily: "AvenirNextLTPro-Regular",
    },
    clockIcon: {
        marginHorizontal: 5,
    },
    purplePartText3: {
        color: Colors.white,
        fontSize: FontSize.medium,
        fontFamily: "AvenirNextLTPro-Regular",
    },
    whitePart: {
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: Colors.white
    },
    whitePartText1: {
        color: Colors.lightGreyText,
        fontSize: FontSize.small,
        fontFamily: "AvenirNextLTPro-Regular",
    },
    whitePartText2: {
        // textAlign: "center",
        color: Colors.black,
        fontSize: FontSize.medium,
        fontFamily: "AvenirNextLTPro-Regular",
    },
    icon: {
        marginHorizontal: 6, 
      },
    whitePartText3: {
        color: Colors.greyText,
        fontSize: FontSize.medium,
        fontFamily: "AvenirNextLTPro-Regular",
        marginBottom: 10

    },
    greyPart: {
        paddingTop: 30,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: Colors.lightGrey

    },
    greyPartText1: {
        marginLeft: 10,
        color: Colors.greyText,
        fontSize: FontSize.medium,
        fontFamily: "AvenirNextLTPro-Regular",
    },
    greyPartText2: {
        color: Colors.greyText,
        fontSize: FontSize.small,
        fontFamily: "AvenirNextLTPro-Regular",
    }
    

});