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
    }
});

export default loginSceneStyles;