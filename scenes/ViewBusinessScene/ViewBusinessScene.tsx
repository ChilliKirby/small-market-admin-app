import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import getBusiness from "../../Controller/getBusiness";
import { RootTabParamList } from "../../NavigationTypes";
import styles from "../../Styles";
import viewBusinessStyles from "./ViewBusinessSceneStyles";


type props = BottomTabScreenProps<RootTabParamList, 'ViewBusinessScene'>

interface Business {
    _id: string,
    name: string,
    email: string,
    phone: string,
    state: string,
    city: string,
    street: string,
    zipcode: string,
    imageMain: string,
    imageFirst: string,
    imageSecond: string,
    imageThird: string,
    autoRenew: boolean,
    paymentProvider: string,
    status: string,
    subscriptionPlan: string,
}

/**
 * View the profile of a business document
 * @param param0 
 * @returns 
 */
const ViewBusinessScene = ({ navigation, route }: props) => {

    const [business, setBusiness] = useState<Business | null>();

    const user = useSelector((state: RootState) => state.admin);

    const id = "route.params.businessId";
    const token = user.token;

    useEffect(() => {
        const fetchBusiness = async () => {
            try {
                const response = await getBusiness({ token, id });
                console.log(response);
                setBusiness(response)
            } catch (error) {
                console.log(error);
            }
        };

        fetchBusiness();
    }, []);

    const navigateToEditBusiness = () => {
        navigation.navigate("EditBusinessScene", {
            businessId: id
        })
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ScrollView>
                    {business ? (
                        <View style={[styles.mainView, { alignContent: 'center' }]}>
                              <TouchableOpacity style={{alignSelf: 'flex-end', margin: 15}} onPress={navigateToEditBusiness}>
                                    <Text style={styles.fontEdit}>
                                        edit information
                                    </Text>
                                </TouchableOpacity>
                            <Image
                                source={
                                    business.imageMain
                                        ? { uri: business.imageMain }
                                        : require("../../assets/images/no-image.png")
                                }
                                style={viewBusinessStyles.mainImageLarge}
                            />

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Id: {business._id}
                                </Text>

                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Name: {business.name}
                                </Text>

                               
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Phone: {business.phone}
                                </Text>
                                
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Street: {business.street}
                                </Text>
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    City: {business.city}
                                </Text>
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    State: {business.state}
                                </Text>
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Zipcode: {business.zipcode}
                                </Text>
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Email: {business.email}
                                </Text>
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                {business.autoRenew
                                    ? <Text style={styles.fontMedium}>
                                        Auto Renewal: True
                                    </Text>
                                    : <Text style={styles.fontMedium}>
                                        Auto Renewal: False
                                    </Text>
                                }
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Payment Provider: {business.paymentProvider}
                                </Text>
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Status: {business.status}
                                </Text>
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Subscription Plan: {business.subscriptionPlan}
                                </Text>
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Status: {business.status}
                                </Text>
                            </View>

                            <View style={viewBusinessStyles.sectionView}>
                                <Text style={styles.fontMedium}>
                                    Subscription Plan: {business.subscriptionPlan}
                                </Text>
                            </View>

                                <View style={viewBusinessStyles.sectionView}>
                            <Image
                                source={
                                    business.imageFirst
                                        ? { uri: business.imageFirst }
                                        : require("../../assets/images/no-image.png")
                                }
                                style={viewBusinessStyles.imageSmallView}
                            />
</View>

<View style={viewBusinessStyles.sectionView}>
                            <Image
                                source={
                                    business.imageSecond
                                        ? { uri: business.imageSecond }
                                        : require("../../assets/images/no-image.png")
                                }
                                style={viewBusinessStyles.imageSmallView}
                            />
</View>
<View style={viewBusinessStyles.sectionView}>
                            <Image
                                source={
                                    business.imageThird
                                        ? { uri: business.imageThird }
                                        : require("../../assets/images/no-image.png")
                                }
                                style={viewBusinessStyles.imageSmallView}
                            />
                            </View>

                        </View>
                    ) : (
                        <View style={[styles.mainView, { alignContent: 'center' }]}>
                            <Text>loading</Text>
                        </View>
                    )
                    }

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default ViewBusinessScene;