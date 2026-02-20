import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;

const viewBusinessStyles = StyleSheet.create({

    mainImageLarge: {
        width: width * .8,
        height: width * .4,
        alignSelf: 'center',
        marginBottom: 7
    },
    imageSmallView:{
        width: width * .3,
        height: width * .2,
        margin: 15
    },
    //section containing text, image, etc...
    sectionView:{
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 17
    }
});

export default viewBusinessStyles;