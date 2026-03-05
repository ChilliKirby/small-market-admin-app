import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;

const editBusinessSceneStyles = StyleSheet.create({
    textInputContainer:{
        backgroundColor: "#FFFFFF",
    },
    inputContainerView: {
        width: width * .85,
        height: 50,
        marginBottom: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 15,
    },
    inputContainerLargeView: {
        width: width * .85,
        height: 150,
        marginBottom: 15,
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    input: {
        borderColor: '#aaa',
        padding: 10,
        borderRadius: 5,
    },
});

export default editBusinessSceneStyles;