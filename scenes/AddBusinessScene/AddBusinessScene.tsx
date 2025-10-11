import { Feather } from '@expo/vector-icons';
import { yupResolver } from "@hookform/resolvers/yup";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import addBusiness from '@/Controller/addBusiness';
import { RootState } from '@/store/store';
import { pickImage } from '@/Utilities/pickImage';
import { useSelector } from 'react-redux';
import { RootTabParamList } from "../NavigationTypes";
import styles from "../Styles";
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
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").default(""),
    phone: Yup.string().matches(
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
        'Invalid phone number format'
    ).default(""),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required."),
    state: Yup.string().required("State is required"),
    zipcode: Yup.string().required("Zip code is required"),
    website: Yup.string()
        .matches(
            /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
            'Enter a valid website'
        ).default(""),
    info: Yup.string().max(500, "Info must not exceed 500 characters").default(""),
});

/**
 * 
 * @param data 
 */
const onSubmit = async (token: string, data: FormData, mainImage: Blob | null, mainImageUri: string, imageFirst: Blob | null, imageFirstUri: string, imageSecond: Blob | null, imageSecondUri: string, imageThird: Blob | null, imageThirdUri: string ) => {
    
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
        imageFirst: imageFirst,
        imageFirstUri: imageFirstUri,
        imageSecond: imageSecond,
        imageSecondUri: imageSecondUri,
        imageThird: imageThird,
        imageThirdUri: imageThirdUri
    });
}

type props = BottomTabScreenProps<RootTabParamList, 'AddBusinessScene'>

const AddBusinessScene = ({ navigation }: props) => {

    const user = useSelector((state: RootState) => state.admin);

    //Main business image
    const [imageUri, setImageUri] = useState<string>('');
    const [blob, setBlob] = useState<Blob | null>(null);

    const [imageUriFirst, setImageUriFirst] = useState<string>('');
    const [blobFirst, setBlobFirst] = useState<Blob | null>(null);

    const [imageUriSecond, setImageUriSecond] = useState<string>('');
    const [blobSecond, setBlobSecond] = useState<Blob | null>(null);

    const [imageUriThird, setImageUriThird] = useState<string>('');
    const [blobThird, setBlobThird] = useState<Blob | null>(null);

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

    /**
     * Allows user to set first business image
     */
    const selectImageFirst = async () => {
        try {
            const image = await pickImage();
            if (!image) return;

            const response = await fetch(image);

            if (response) {
                setBlobFirst(await response.blob());
                setImageUriFirst(image);
            }
        } catch (error) {
            console.log(error);
        }
    };

     /**
     * Allows user to set Second business image
     */
    const selectImageSecond = async () => {
        try {
            const image = await pickImage();
            if (!image) return;

            const response = await fetch(image);

            if (response) {
                setBlobSecond(await response.blob());
                setImageUriSecond(image);
            }
        } catch (error) {
            console.log(error);
        }
    };

     /**
     * Allows user to set Third business image
     */
    const selectImageThird = async () => {
        try {
            const image = await pickImage();
            if (!image) return;

            const response = await fetch(image);

            if (response) {
                setBlobThird(await response.blob());
                setImageUriThird(image);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={[styles.mainView, { alignItems: 'center' }]}>
                    <Text style={[styles.fontLarge, { margin: 50 }]} >
                        Add a new business
                    </Text>

                    <ScrollView style={{ flexGrow: 1 }}>
                        {['name', 'email', 'phone','street', 'city', 'state', 'zipcode', 'website'].map((field) => (
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
                                    />

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
                                <Feather name="camera" size={28} color="#007AFF" />
                            </TouchableOpacity>


                            <Text style={styles.fontMedium}> Business image 1 </Text>

                            {imageUriFirst ? (
                                <Image style={addBusinessSceneStyles.image} source={{ uri: imageUriFirst }} />
                            ):(
                                null
                            )}

                            <TouchableOpacity style={addBusinessSceneStyles.iconButtonView} onPress={selectImageFirst}>
                                <Feather name="camera" size={28} color="#007AFF" />
                            </TouchableOpacity>


                            <Text style={styles.fontMedium}> Business image 2</Text>

                            {imageUriSecond ? (
                                <Image style={addBusinessSceneStyles.image} source={{ uri: imageUriSecond }}/>
                            ):(
                                null
                            )}

                            <TouchableOpacity style={addBusinessSceneStyles.iconButtonView} onPress={selectImageSecond}>
                                <Feather name="camera" size={28} color="#007AFF" />
                            </TouchableOpacity>


                            <Text style={styles.fontMedium}> Business image 3</Text>

                            {imageUriThird ? (
                                <Image style={addBusinessSceneStyles.image} source={{ uri: imageUriThird }}/>
                            ):(
                                null
                            )}

                            <TouchableOpacity style={addBusinessSceneStyles.iconButtonView} onPress={selectImageThird}>
                                <Feather name="camera" size={28} color="#007AFF" />
                            </TouchableOpacity>



                        </View>

                        <TouchableOpacity style={addBusinessSceneStyles.buttonView} onPress={handleSubmit((data) => onSubmit(user.token, data, blob, imageUri, blobFirst, imageUriFirst, blobSecond, imageUriSecond, blobThird, imageUriThird))}>
                            <View>
                                <Text style={styles.fontMedium}>
                                    Submit
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default AddBusinessScene;