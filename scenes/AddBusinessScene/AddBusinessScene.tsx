import { Feather } from '@expo/vector-icons';
import { yupResolver } from "@hookform/resolvers/yup";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FlatList, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import addBusiness from '@/Controller/addBusiness';
import { RootState } from '@/store/store';
import { pickImage } from '@/Utilities/pickImage';
import { useSelector } from 'react-redux';
import getBusinessCategories from '../../Controller/getBusinessCategories';
import { RootTabParamList } from "../../NavigationTypes";
import styles from "../../Styles";
import Background from '../Background/Background';
import addBusinessSceneStyles from './AddBusinessSceneStyles';



type FormData = {
    name: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
    website: string;
    info: string;
};

const formSchema = Yup.object({
    name: Yup.string().max(30, "Name must no exceed 30 characters.").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
        'Enter valid phone number'
    ).default(""),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required."),
    state: Yup.string().required("State is required"),
    zipcode: Yup.string().required("Zip code is required"),
    website: Yup.string()
        .matches(
            /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
            'Enter a valid website (ex: smallmarket.com)'
        ).default(""),
    info: Yup.string().max(500, "Info must not exceed 500 characters").default(""),
});

type Category = {
    _id: string;
    name: string;
    slug: string;
    color: string;
    icon: string;
}

type props = BottomTabScreenProps<RootTabParamList, 'AddBusinessScene'>

/**
 * This scene allows user to submit new businesses to database
 * @param 
 * @returns 
 */
const AddBusinessScene = ({ navigation }: props) => {

    const user = useSelector((state: RootState) => state.admin);

    const [businessCategories, setBusinessCategories] = useState<Category[] | null>(null);

    //Main business image
    const [imageUri, setImageUri] = useState<string>('');
    const [blob, setBlob] = useState<Blob | null>(null);

    /**
 * Takes data for business and uses controller to post data to database
 * @param token : string - JWT of user 
 * @param data : Formdata - business info
 */
    const onSubmit = async (token: string, data: FormData, mainImage: Blob | null, mainImageUri: string) => {

        const response = await addBusiness({
            //admin user info
            token: token,
            //Business info
            name: data.name,
            email: data.email,
            phone: data.phone,
            street: data.street,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
            website: data.website,
            info: data.info,
            mainImage: mainImage,
            mainImageUri: mainImageUri,

        });

        if (response) {

            if (response.status >= 200 && response.status < 300) {

                navigation.navigate('ViewBusinessScene', {
                    businessId: response.data.id
                });
            } else {
                console.log(response.data)
            }
        }
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(formSchema),
    });

    /**
     * Allow user to add image from gallery
     */
    const selectImage = async () => {
        try {
            const image = await pickImage();
            if (!image) return;

            const response = await fetch(image);

            if (response) {
                setBlob(await response.blob());
                setImageUri(image);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await getBusinessCategories({
                token: user.token
            });
            setBusinessCategories(response.businessCategories);

        }

        fetchCategories();
    }, []);

    return (
        <SafeAreaProvider style={{ height: "100%" }}>
            <SafeAreaView style={{ flex: 1 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>
                        <Background>

                            <View style={[styles.mainView, { alignItems: 'center' }]}>
                                <Text style={[styles.fontLarge, { margin: 50 }]} >
                                    Add a new business
                                </Text>

                                <ScrollView style={{ flexGrow: 1 }}>
                                    {['name', 'email', 'phone', 'street', 'city', 'state', 'zipcode', 'website'].map((field) => (
                                        <View key={field}>
                                            <Text style={styles.fontMedium}> {field} </Text>
                                            <View key={field} style={addBusinessSceneStyles.inputContainerView} >
                                                <Controller
                                                    name={field as keyof FormData}
                                                    control={control}
                                                    render={({ field: { onChange, value, onBlur } }) => (
                                                        <TextInput
                                                            style={addBusinessSceneStyles.input}
                                                            placeholder={field}
                                                            onChangeText={onChange}
                                                            onBlur={onBlur}
                                                            value={value}
                                                        />
                                                    )}
                                                />
                                            </View>

                                            {errors[field as keyof FormData] && (
                                                <Text style={[styles.fontErrorRegular, { marginBottom: 20 }]}>
                                                    {errors[field as keyof FormData]?.message}
                                                </Text>
                                            )}
                                        </View>
                                    ))}

                                    <Text style={styles.fontMedium}> Business info </Text>
                                    <View style={addBusinessSceneStyles.inputContainerLargeView} >
                                        <Controller
                                            name="info"
                                            control={control}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <TextInput
                                                    style={addBusinessSceneStyles.input}
                                                    placeholder="Business info"
                                                    onChangeText={onChange}
                                                    onBlur={onBlur}
                                                    value={value}
                                                    multiline
                                                />

                                            )}
                                        />
                                    </View>


                                    <View style={addBusinessSceneStyles.inputContainerLargeView}>
                                        <FlatList
                                            horizontal
                                            data={businessCategories}
                                            renderItem={({ item }) => (
                                                <TouchableOpacity
                                                    onPress={() => console.log("tapped")}
                                                >
                                                    <Text style={styles.fontMediumBlack}>{item.name}</Text>
                                                </TouchableOpacity>
                                            )}
                                        />

                                    </View>


                                    <View style={{ margin: 15, flexDirection: 'column' }}>


                                        <Text style={styles.fontMedium}> Main Business Image </Text>

                                        {imageUri ? (
                                            <Image style={addBusinessSceneStyles.image} source={{ uri: imageUri }} />

                                        ) : (
                                            null
                                        )}

                                        <TouchableOpacity style={addBusinessSceneStyles.iconButtonView} onPress={selectImage}>
                                            <Feather name="camera" size={28} color="#ffffffff" />
                                        </TouchableOpacity>


                                    </View>

                                    <TouchableOpacity style={addBusinessSceneStyles.buttonView} onPress={handleSubmit((data) => onSubmit(user.token, data, blob, imageUri))}>
                                        <View>
                                            <Text style={styles.fontMedium}>
                                                Submit
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        </Background>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default AddBusinessScene;