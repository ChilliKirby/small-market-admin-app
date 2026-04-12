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
    containerIcon: {
        width: '100%',
        height: width * .15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default editBusinessImageSceneStyles;