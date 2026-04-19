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
import Background from "../Background/Background";
import browseBusinessSceneStyles from "./BrowseBusinessSceneStyles";

type props = BottomTabScreenProps<RootTabParamList, 'BrowseBusinessScene'>;
/**
 * Shows list of businesses for browsing
 * 
 */
const BrowseBusinessScene = ({ navigation, route }: props) => {

    //list of businesses
    const [businesses, setBusinesses] = useState<businessTypeShort[]>([]);

    //total pages of business collection
    const [totalPages, setTotalPages] = useState(1);

    //current page of businesses
    const [page, setPage] = useState(1);

    //loading state of the screen
    const [loading, setLoading] = useState(true);

    //jwt token 
    const token = useSelector((state: RootState) => state.admin.token);

    /**
         * Fetch set of businesses to be displayed in list. Called 
         * when page is changed.
         */
    useEffect(() => {
        const fetchBusinesses = async () => {
            try {
                const response = await getBusinesses({
                    token: token,
                    page: page
                });

                setBusinesses(response.businesses);
                setTotalPages(response.totalPages);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBusinesses();
    }, [page]);

    //Display loading symbol while fetching business information.
    if (loading) {
        return (
            <SafeAreaProvider style={{ height: "100%" }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Background>
                        <View style={[styles.mainView, { alignItems: 'center' }]}>
                            <ActivityIndicator size='large' />
                        </View>
                    </Background>
                </SafeAreaView>
            </SafeAreaProvider>
        )
    };

    /**
     * Returns an array of integers to be used to display current
     * page number and neighbors
     * @returns array type integer
     */
    const getPageNumbers = () => {

        const maxPages = 5;
        const half = Math.floor(maxPages / 2);

        let start = page - half;
        let end = page + half;

        if (start < 1) {
            start = 1;
            end = Math.min(maxPages, totalPages);
        };

        if (end > totalPages) {
            end = totalPages;
            start = Math.max(1, totalPages - maxPages + 1);
        }

        const pages = [];

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    }

    /**
     * Navigate to business view scene with selected business info.
     * @param businessId - id of business used to fetch info
     */
    const viewBusiness = (businessId: string) => {
        navigation.navigate("ViewBusinessScene", {
            businessId
        })
    }

    return (
        <SafeAreaProvider style={{ height: "100%" }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Background>
                    <View style={[styles.mainView, { alignItems: 'center' }]}>
                        <Text style={styles.fontLarge}>Browse Businesses </Text>

                        <FlatList
                            data={businesses}
                            keyExtractor={(item) => item._id}
                            renderItem={({ item }) => (
                                <View style={browseBusinessSceneStyles.businessRowView}>

                                    <View style={{ margin: 3 }}>
                                        <Text style={[styles.fontMedium, { margin: 3 }]}>{item.name}</Text>
                                        <Text style={[styles.fontRegular, { margin: 3 }]}>{item.status}</Text>
                                        <Text style={[styles.fontRegular, { margin: 3 }]}>{item.subscriptionPlan}</Text>
                                        <Text style={{ fontSize: 12, color: '#eee' }}>{item._id}</Text>
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

                                        <TouchableOpacity onPress={() => viewBusiness(item._id)}>
                                            <Feather name="info" size={32} color="#007AFF" />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )}
                        />

                        <TouchableOpacity disabled={page === 1} onPress={() => setPage(page - 1)}>
                            <Text style={styles.fontEdit}>Prev</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', justifyContent: "center", marginTop: 20 }}>
                            {getPageNumbers().map((p) => (
                                <TouchableOpacity
                                    key={p}
                                    onPress={() => setPage(p)}
                                    style={{
                                        padding: 10,
                                        margin: 5,
                                        backgroundColor: p === page ? "#007AFF" : "#ccc",
                                        borderRadius: 5
                                    }}
                                >
                                    <Text style={{ color: "white" }}>{p}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>


                    </View>
                </Background>
            </SafeAreaView>
        </SafeAreaProvider>
    )

};

export default BrowseBusinessScene;