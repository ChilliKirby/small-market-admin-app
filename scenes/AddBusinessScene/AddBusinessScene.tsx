import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import styles from "../Styles";



const AddBusinessScene = () => {

    const formSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email"),
        phone: Yup.string().matches(
            /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
            'Invalid phone number format'
        ),
        address: Yup.string().required("Address is required"),
        website: Yup.string()
            .matches(
                /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
                'Enter a valid website'
            )
            .notRequired(),
    })
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={[styles.mainView, { alignItems: 'center' }]}>
                    <Text style={styles.fontLarge}>
                        Add a new business
                    </Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default AddBusinessScene;