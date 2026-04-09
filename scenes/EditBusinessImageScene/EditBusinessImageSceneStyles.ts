import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;

const editBusinessImageSceneStyles = StyleSheet.create({

     mainImageLarge: {
        width: width * .8,
        height: width * .4,
        alignSelf: 'center',
        marginBottom: 7,
        borderRadius: 7
    },
});

export default editBusinessImageSceneStyles;