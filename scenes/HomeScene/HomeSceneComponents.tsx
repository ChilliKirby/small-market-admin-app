import { Text, View } from "react-native";
import homeSceneStyles from './HomeSceneStyles';

type dataBox = {

} 
const DataBox = () => {
    return (
        <View style={ homeSceneStyles.dataBoxView }>
            <Text>
                data
            </Text>
        </View>
    )
};

export { DataBox };

