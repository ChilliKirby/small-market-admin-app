import { Dimensions, StyleSheet } from "react-native";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    dataBoxView: {
        backgroundColor: '#FFFFFF',
        height: screenHeight * .25,
        width: '35%',
        margin: 5,
        borderRadius: 10,
        alignItems: 'center'
    },

    dataBoxHorizontalContainerView: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-around',
        margin: 15
    }
});

export default styles;