import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import getBusiness from '@/Controller/getBusiness';
import { RootTabParamList } from '@/NavigationTypes';
import { RootState } from '@/store/store';
import { Business } from '@/types/Business';
import editBusinessSceneStyles from "./EditBusinessSceneStyles";


type props = BottomTabScreenProps<RootTabParamList, 'EditBusinessScene'>

const formSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email"),
    phone: Yup.string().matches(
        /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
        'Enter valid phone number'
    ),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("State is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.string().required("Zipcode is required"),
    website: Yup.string()
        .matches(
            /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
            'Enter a valid website (ex: smallmarket.com)'
        ),
    info: Yup.string().max(500, "info must not exceed 500 characters")
});

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
        <TextInput
            style={editBusinessSceneStyles.textInputContainer}
        />
    )
};

export default EditBusinessScene;