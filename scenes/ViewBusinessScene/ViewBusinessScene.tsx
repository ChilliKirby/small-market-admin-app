import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useCallback, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { useFocusEffect } from "@react-navigation/native";
import getBusiness from "../../Controller/getBusiness";
import { RootTabParamList } from "../../NavigationTypes";
import styles from "../../Styles";
import Background from "../Background/Background";
import viewBusinessStyles from "./ViewBusinessSceneStyles";


type props = BottomTabScreenProps<RootTabParamList, 'ViewBusinessScene'>

interface Business {
    _id: string,
    name: string,
    email: string,
    phone: string,
    info: string,
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

    const id = route.params.businessId;
    const token = user.token;

    useFocusEffect(
        useCallback(() => {
            const fetchBusiness = async () => {
                try {
                    const response = await getBusiness({ token, id });
                    setBusiness(response)
                } catch (error) {
                    console.log(error);
                }
            };

            fetchBusiness();
        }, [id]));

    //Navigate to profile edit scene
    const navigateToEditBusiness = () => {
        navigation.navigate("EditBusinessScene", {
            businessId: id
        })
    };

    //Navigate to profile browsing scene
    const navigateToBrowseBusiness = () => {
        navigation.navigate("BrowseBusinessScene")
    };

    //Navigate to EditBusinessImage scene
    const navigateToEditBusinessImage = (imageUri: string, imagePosition: string) => {
        navigation.navigate("EditBusinessImageScene", {
            businessId: id,
            imageUri: imageUri,
            imagePosition: imagePosition,
        })
    }

    return (
        <SafeAreaProvider style={{ height: "100%" }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Background>
                    <View style={styles.mainView}>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-start', margin: 15 }} onPress={navigateToBrowseBusiness}>
                                <Text style={styles.fontEdit}>
                                    back
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 15 }} onPress={navigateToEditBusiness}>
                                <Text style={styles.fontEdit}>
                                    edit information
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ alignItems: 'center', width: '100%' }}>
                            <Text style={styles.fontLarge}>Business profile</Text>
                        </View>

                        <ScrollView>
                            {business ? (
                                <View style={[{ alignContent: 'center' }]}>
                                    <Image
                                        source={
                                            business.imageMain
                                                ? { uri: business.imageMain }
                                                : require("../../assets/images/no-image.png")
                                        }
                                        style={viewBusinessStyles.mainImageLarge}
                                    />

                                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => navigateToEditBusinessImage(business.imageMain, "0")}>
                                        <Text style={styles.fontEdit}> Edit Main image </Text>
                                    </TouchableOpacity>

                                    <View style={viewBusinessStyles.sectionView}>
                                        <Text style={styles.fontMedium}>
                                            Id: {business._id}
                                        </Text>

                                    </View>

                                    <View style={viewBusinessStyles.sectionView}>
                                        <Text style={styles.fontMedium}>
                                            Name: {business.name} {business.imageMain} {business.imageFirst}
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
                                        <Text style={styles.fontMedium}>
                                            Info: {business.info}
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

                                        <TouchableOpacity onPress={() => navigateToEditBusinessImage(business.imageFirst, "1")}>
                                            <Text style={styles.fontEdit} > Edit first image</Text>
                                        </TouchableOpacity>
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
                                        <TouchableOpacity onPress={() => navigateToEditBusinessImage(business.imageSecond, "2")}>
                                            <Text style={styles.fontEdit} > Edit second image </Text>
                                        </TouchableOpacity>
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
                                        <TouchableOpacity onPress={() => navigateToEditBusinessImage(business.imageThird, "3")}>
                                            <Text style={styles.fontEdit} > Edit third image </Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            ) : (
                                <View style={[styles.mainView, { alignContent: 'center' }]}>
                                    <Text>loading</Text>
                                </View>
                            )
                            }

                        </ScrollView>
                    </View>
                </Background>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default ViewBusinessScene;