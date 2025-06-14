import { Text, View } from "react-native";
import homeSceneStyles from './HomeSceneStyles';

interface dataBox {
    title: string,
    
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

