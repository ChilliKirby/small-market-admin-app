import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { RootTabParamList } from "../NavigationTypes";
import styles from "../Styles";
import { DataBox } from "./HomeSceneComponents";
import homeSceneStyles from './HomeSceneStyles';


type props = BottomTabScreenProps<RootTabParamList, 'HomeScene'>;
const HomeScene = ({ navigation, route }: props) => {

    return (
        <SafeAreaProvider >
            <SafeAreaView style={ styles.safeAreaView}>
                 <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
                <View style={ styles.mainView }>
                <ScrollView style={{ height: '100%'}}>
                    <View>
                        <Text style={ styles.fontLarge }>
                            homeff
                        </Text>
                    </View>

                    <View style={ homeSceneStyles.dataBoxHorizontalContainerView }>
                    <DataBox >

                    </DataBox>

                    <DataBox/>
                    </View>
                    
                </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default HomeScene;