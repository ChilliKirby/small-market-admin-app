import { Feather } from "@expo/vector-icons";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import getBusinesses from "@/Controller/getBusinesses";
import { RootTabParamList } from "@/NavigationTypes";
import { RootState } from "@/store/store";
import { businessTypeShort } from "@/Utilities/BusinessTypeShort";
import styles from "../../Styles";
import browseBusinessSceneStyles from "./BrowseBusinessSceneStyles";

type props = BottomTabScreenProps<RootTabParamList, 'ViewBusinessScene'>;
/**
 * Shows list of businesses for browsing
 * 
 */
const BrowseBusinessScene = ({navigation, route}: props) => {

    const [businesses, setBusinesses] = useState<businessTypeShort[]>([]);
    const [loading, setLoading] = useState(true);

    const token = useSelector((state: RootState) => state.admin.token);

    useEffect(() => {

        /**
         * Fetch set of businesses to be displayed in list.
         */
        const fetchBusinesses = async () => {
            try {
                const list = await getBusinesses({
                    token: token,
                    page: 1
                });

                setBusinesses(list);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBusinesses();
    }, []);

    //Display loading symbol while fetching business information.
    if (loading) {
        return (
            <SafeAreaProvider>
                <SafeAreaView>
                    <View style={[styles.mainView, { alignItems: 'center' }]}>
                        <ActivityIndicator size='large' />
                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        )
    };

    const viewBusiness = (businessId: string) => {
        navigation.navigate("ViewBusinessScene", {
            businessId
        })
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={[styles.mainView, { alignItems: 'center' }]}>
                    <Text style={styles.fontLarge}>Browse Businesses </Text>

                    <FlatList
                        data={businesses}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <View style={browseBusinessSceneStyles.businessRowView}>

                                <View style={{ margin: 3 }}>
                                    <Text style={[styles.fontMedium, { margin: 3 }]}>{item.name}</Text>
                                    <Text style={[styles.fontRegular, {margin: 3}]}>{item.status}</Text>
                                    <Text style={[styles.fontRegular, {margin: 3}]}>{item.subscriptionPlan}</Text>
                                    <Text style={{fontSize:12, color: '#eee'}}>{item._id}</Text>
                                </View>

                                <View style={{ margin: 7, justifyContent: 'center', flexDirection: 'row', columnGap: 10 }}>
                                    <Image
                                    source={
                                            item.imageMain
                                            ? { uri: item.imageMain }
                                            : require('../../Utilities/AppImages/no_image.jpg')}
                                    style={{ width: 64, height: 64, borderRadius: 10 }}
                                    resizeMode="cover"
                                />  

                                <TouchableOpacity onPress={()=> viewBusiness(item._id)}>
                                <Feather name="info" size={32} color="#007AFF"/>
                                </TouchableOpacity>
                                </View>

                            </View>
                        )}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )

};

export default BrowseBusinessScene;