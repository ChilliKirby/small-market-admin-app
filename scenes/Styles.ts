
import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%',
        backgroundColor: '#3D3D3D',
        padding: 7
    },
    safeAreaView:{
        height: '100%',
        width: '100%',
    },



    //////////////////////Font///////////////////////////////

    fontLarge: {
        fontSize: 30,
        color: 'white',
        margin: 50
    },
    fontMedium: {
        fontSize: 22,
        color: 'white',
    },
    fontRegular: {
        fontSize: 18,
        color: 'white',
    },
    fontErrorRegular: {
        fontSize: 18,
        color: 'red',
    },
    fontEdit: {
        fontSize: 18,
        color: '#ADD8E6',
    },


    /////////////////Text input///////////////////////////////
     inputContainerView: {
        width: width * .85,
        height: 50,
        marginBottom: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 15,
    },

});

export default styles;