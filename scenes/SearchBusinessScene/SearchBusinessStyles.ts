import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const styles = StyleSheet.create({

 inputContainerView: {
        width: '90%',
        height: 50,
        marginBottom: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        borderRadius: 15,
    },
    searchBarView: {
        width: width * .65,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,

    }
})

export default styles;