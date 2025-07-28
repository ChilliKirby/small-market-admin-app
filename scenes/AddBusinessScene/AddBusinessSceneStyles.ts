import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        padding: 20,
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
    buttonView:{
        height: 60,
        width: width * .85,
        padding: 15,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    iconButtonView:{
        height: 60,
        width: 60
    },
    error: {
        color: 'red',
        marginTop: 5,
    },
})

export default styles;