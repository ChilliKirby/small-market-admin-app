
import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%',
        //backgroundColor: '#3D3D3D',
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
        margin: 50,
        fontFamily: 'SpaceMono'
    },
    fontMedium: {
        fontSize: 22,
        color: 'white',
        fontFamily: 'SpaceMono'
    },
    fontRegular: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'SpaceMono'
    },
    fontLargeBlack: {
        fontSize: 30,
        color: 'black',
        margin: 50,
        fontFamily: 'SpaceMono'
    },
    fontMediumBlack: {
        fontSize: 22,
        color: 'black',
        fontFamily: 'SpaceMono'
    },
    fontRegularBlack: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'SpaceMono'
    },
    fontErrorRegular: {
        fontSize: 18,
        color: 'red',
        fontFamily: 'SpaceMono'
    },
    fontEdit: {
        fontSize: 18,
        color: '#ADD8E6',
        fontFamily: 'SpaceMono'
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

    ////////////////Buttons/////////////////////////////
    buttonView:{
        height: 60,
        width: width * .85,
        padding: 15,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

});

export default styles;