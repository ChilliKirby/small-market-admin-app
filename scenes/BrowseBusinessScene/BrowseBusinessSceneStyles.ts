import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;

const browseBusinessSceneStyles = StyleSheet.create({

    businessRowView: {
        padding: 16, 
        width: width * .85,
        height: 'auto',
        borderBottomWidth: 1,
        borderColor: "#eee",
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default browseBusinessSceneStyles;