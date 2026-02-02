import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import getBusinesses from "@/Controller/getBusinesses";
import { businessTypeShort } from "@/Utilities/BusinessTypeShort";
import styles from "../Styles";
import browseBusinessSceneStyles from "./BrowseBusinessSceneStyles";

const BrowseBusinessScene = () => {

    const [businesses, setBusinesses] = useState<businessTypeShort[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchBusinesses = async () => {
            try {
                const list = await getBusinesses({
                    token: "hjk",
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

                                <View style={{ margin: 7, justifyContent: 'center' }}>
                                    <Image
                                    source={
                                            item.imageMain
                                            ? { uri: item.imageMain }
                                            : require('../../Utilities/AppImages/no_image.jpg')}
                                    style={{ width: 64, height: 64, borderRadius: 10 }}
                                    resizeMode="cover"
                                />  
                                
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