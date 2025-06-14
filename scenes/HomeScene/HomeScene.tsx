import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { RootTabParamList } from "../NavigationTypes";
import styles from "../Styles";
import homeSceneStyles from './HomeSceneStyles';


type props = BottomTabScreenProps<RootTabParamList, 'HomeScene'>;
const HomeScene = ({ navigation, route }: props) => {

    return (
        <SafeAreaProvider >
            <SafeAreaView style={styles.safeAreaView}>
                <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
                <View style={styles.mainView}>
                    <View style={{ alignItems: 'center', margin: 20 }}>
                        <Text style={styles.fontLarge}>
                            Small Market Admin DashBoard
                        </Text>
                    </View>
                    <ScrollView style={{ height: '100%' }}>

                        <View style={homeSceneStyles.dataBoxHorizontalContainerView}>
                            <View style={homeSceneStyles.dataBoxView}>
                                <Text style={ styles.fontMedium }>
                                    Number of businesses
                                </Text>
                            </View>

                             <View style={homeSceneStyles.dataBoxView}>
                                <Text style={ styles.fontMedium }>
                                    data
                                </Text>
                            </View>                           
                        </View>

                         <View style={homeSceneStyles.dataBoxHorizontalContainerView}>
                            <View style={homeSceneStyles.dataBoxView}>
                                <Text style={ styles.fontMedium }>
                                    data
                                </Text>
                            </View>

                             <View style={homeSceneStyles.dataBoxView}>
                                <Text style={ styles.fontMedium }>
                                    data
                                </Text>
                            </View>                           
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default HomeScene;