import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({

 inputContainerView: {
        width: width * .65,
        height: 50,
        marginBottom: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 15,
    },
})

export default styles;