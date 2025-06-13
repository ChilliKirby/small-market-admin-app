import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";

import { RootTabParamList } from "./NavigationTypes";

type props = BottomTabScreenProps<RootTabParamList, 'HomeScene'>;
const HomeScene = () => {

    return(
        <View>
            <Text>
                home
            </Text>
        </View>
    )
};

export default HomeScene;