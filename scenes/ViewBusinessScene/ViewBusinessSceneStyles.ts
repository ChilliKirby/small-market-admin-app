import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;

const viewBusinessStyles = StyleSheet.create({

    mainImageLarge: {
        width: width * .6,
        height: width * .4,
        alignSelf: 'center',
        margin: 7
    }
});

export default viewBusinessStyles;