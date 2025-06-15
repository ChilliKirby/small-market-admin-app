import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

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

const AddBusinessScene = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(formSchema),
    });



    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={[styles.mainView, { alignItems: 'center' }]}>
                    <Text style={[ styles.fontLarge, {marginBottom: 50 }]} >
                        Add a new business
                    </Text>

                     <ScrollView>
                    {['name', 'email', 'phone', 'address', 'website', 'info'].map( (field) => (
                        <View key={ field } style={ addBusinessSceneStyles.inputContainer } >
                            <Controller
                                name={field as keyof FormData}
                                control={ control }
                                render={({field: { onChange, value, onBlur } }) => (
                                    <TextInput
                                        style={ addBusinessSceneStyles.input }
                                        placeholder={ field }
                                        onChangeText={ onChange }
                                        onBlur={ onBlur }
                                        value={ value }
                                    />
                                )}
                            />
                        </View>
                    ))}
                </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default AddBusinessScene;