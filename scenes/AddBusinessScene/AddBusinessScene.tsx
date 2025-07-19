import { yupResolver } from "@hookform/resolvers/yup";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import { RootTabParamList } from "../NavigationTypes";
import styles from "../Styles";
import addBusinessSceneStyles from './AddBusinessSceneStyles';

type FormData = {
    name: string;
    email: string;
    phone: string;
    address: string;
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
    address: Yup.string().required("Address is required"),
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
const onSubmit = (data: FormData) => {
    console.log("test submit");
}

type props = BottomTabScreenProps<RootTabParamList, 'AddBusinessScene'>
const AddBusinessScene = ({navigation}: props) => {

    const [imageUri, setImageUri] = useState('');

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
    const pickImage = () => {

    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={[styles.mainView, { alignItems: 'center' }]}>
                    <Text style={[styles.fontLarge, { margin: 50 }]} >
                        Add a new business
                    </Text>

                    <ScrollView style={{ flexGrow: 1 }}>
                        {['name', 'email', 'phone', 'address', 'website'].map((field) => (
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

                        <TouchableOpacity style={ addBusinessSceneStyles.buttonView} onPress={ handleSubmit(onSubmit) }>
                            <View>
                            <Text style={ styles.fontMedium }>
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