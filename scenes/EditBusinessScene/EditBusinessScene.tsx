import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import getBusiness from '@/Controller/getBusiness';
import { RootTabParamList } from '@/NavigationTypes';
import { RootState } from '@/store/store';
import styles from "@/Styles";
import { Business } from '@/types/Business';
import { yupResolver } from "@hookform/resolvers/yup";
import editBusinessSceneStyles from "./EditBusinessSceneStyles";



type props = BottomTabScreenProps<RootTabParamList, 'EditBusinessScene'>

// type FormData = {
//     name: string;
//     email: string;
//     phone: string;
//     street: string;
//     city: string;
//     state: string;
//     zipcode: string;
//     website: string;
//     info: string;
// }

const formSchema = Yup.object({
    name: Yup.string().defined().required("Name is required"),
    email: Yup.string().email("Invalid email").defined().required(),
    phone: Yup.string().matches(
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
        'Enter valid phone number'
    ).defined().required(),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.string().required("Zipcode is required"),
    website: Yup.string()
        .matches(
            /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
            'Enter a valid website (ex: smallmarket.com)'
        ).defined().required(),
    info: Yup.string().max(500, "info must not exceed 500 characters").defined().required()
});

type FormData = Yup.InferType<typeof formSchema>;

/**
 * EditBusinessScene
 * 
 * Displays information for a single business
 * 
 * 
 * @param Route -> businessId: string(MongoDb _id of the business)
 *  
 * Behavior: 
 * -Fetches info of a single business
 * -Displays info in editable fields 
 * -Saves edited information to MongoDB.
 * -Navigates back to ViewBusinessScene after saving. 
 */
const EditBusinessScene = ({ navigation, route }: props) => {

    const token = useSelector((state: RootState) => state.admin.token)
    const id = route.params.businessId

    const [business, setBusiness] = useState<Business | null>();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(formSchema)
    })

    /**
     * fetch business information with id 
     */
    useEffect(() => {
        const fetchBusiness = async () => {
            try {
                const response = await getBusiness({ token, id });
                setBusiness(response);
            } catch (error) {
                console.log(error);
            }
        }

        fetchBusiness();
    }, []);



    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.mainView}>
                    <Text style={[styles.fontMedium, { alignSelf: 'center' }]}> Edit Business</Text>

                    {business && (
                        <ScrollView style={{ flexGrow: 1 }}>

                            'name', 'email', 'phone', 'street', 'city', 'state', 'zipcode', 'website', 'info'
                            <Text style={styles.fontMedium}>Business name</Text>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <View style={editBusinessSceneStyles.inputContainerView}>
                                        <TextInput
                                            style={editBusinessSceneStyles.input}
                                            placeholder={business.name}
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                        />
                                    </View>
                                )}
                            />

                            <Text style={styles.fontMedium}>Business email</Text>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <View style={editBusinessSceneStyles.inputContainerView}>
                                        <TextInput
                                            style={editBusinessSceneStyles.input}
                                            placeholder={business.email}
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                        />
                                    </View>
                                )}
                            />

                            <Text style={styles.fontMedium}>Business phone</Text>
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <View style={editBusinessSceneStyles.inputContainerView}>
                                        <TextInput
                                            style={editBusinessSceneStyles.input}
                                            placeholder={business.phone}
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                        />
                                    </View>
                                )}
                            />

                            <Text style={styles.fontMedium}>Business street</Text>
                            <Controller
                                name="street"
                                control={control}
                                render={({ field }) => (
                                    <View style={editBusinessSceneStyles.inputContainerView}>
                                        <TextInput
                                            style={editBusinessSceneStyles.input}
                                            placeholder={business.street}
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                        />
                                    </View>
                                )}
                            />

                            <Text style={styles.fontMedium}>Business city</Text>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => (
                                    <View style={editBusinessSceneStyles.inputContainerView}>
                                        <TextInput
                                            style={editBusinessSceneStyles.input}
                                            placeholder={business.city}
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                        />
                                    </View>
                                )}
                            />

                            <Text style={styles.fontMedium}>Business state</Text>
                            <Controller
                                name="state"
                                control={control}
                                render={({ field }) => (
                                    <View style={editBusinessSceneStyles.inputContainerView}>
                                        <TextInput
                                            style={editBusinessSceneStyles.input}
                                            placeholder={business.state}
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                        />
                                    </View>
                                )}
                            />

                            <Text style={styles.fontMedium}>Business zipcode</Text>
                            <Controller
                                name="zipcode"
                                control={control}
                                render={({ field }) => (
                                    <View style={editBusinessSceneStyles.inputContainerView}>
                                        <TextInput
                                            style={editBusinessSceneStyles.input}
                                            placeholder={business.zipcode}
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                        />
                                    </View>
                                )}
                            />

                            <Text style={styles.fontMedium}>Business website</Text>
                            <Controller
                                name="website"
                                control={control}
                                render={({ field }) => (
                                    <View style={editBusinessSceneStyles.inputContainerView}>
                                        <TextInput
                                            style={editBusinessSceneStyles.input}
                                            placeholder={business.website}
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                        />
                                    </View>
                                )}
                            />

                            <Text style={styles.fontMedium}>Business info</Text>
                            <Controller
                                name="info"
                                control={control}
                                render={({ field }) => (
                                    <View style={editBusinessSceneStyles.inputContainerView}>
                                        <TextInput
                                            style={editBusinessSceneStyles.input}
                                            placeholder={business.info}
                                            value={field.value}
                                            onChangeText={field.onChange}
                                            onBlur={field.onBlur}
                                        />
                                    </View>
                                )}
                            />

                        </ScrollView>
                    )}
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default EditBusinessScene;