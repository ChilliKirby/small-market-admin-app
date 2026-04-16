import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;

const loginSceneStyles = StyleSheet.create({
    mainContainer:{
        width: "100%",
        height: "100%",
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

    },
    emptySpaceView: {
        height: width * 0.5
    },
    buttonView: {
        height: 50,
        width: width * 0.70,
        borderColor: "#0940bf",
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'SpaceMono'
    }
});

export default loginSceneStyles;