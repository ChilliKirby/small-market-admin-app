import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('screen').width;

const browseBusinessSceneStyles = StyleSheet.create({

    businessRowView: {
        padding: 16, 
        width: width * .85,
        borderBottomWidth: 1,
        borderColor: "#eee",
    }
});

export default browseBusinessSceneStyles;