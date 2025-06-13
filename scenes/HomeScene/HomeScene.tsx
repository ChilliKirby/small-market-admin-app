import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { RootTabParamList } from "../NavigationTypes";
import styles from "../Styles";
import { DataBox } from "./HomeSceneComponents";


type props = BottomTabScreenProps<RootTabParamList, 'HomeScene'>;
const HomeScene = ({ navigation, route }: props) => {

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView style={ styles.mainView }>
                    <View>
                        <Text>
                            homeff
                        </Text>
                    </View>

                    <DataBox>
                        
                    </DataBox>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default HomeScene;