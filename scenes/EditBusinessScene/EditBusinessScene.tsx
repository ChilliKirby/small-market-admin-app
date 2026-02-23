import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import getBusiness from '@/Controller/getBusiness';
import { RootTabParamList } from '@/NavigationTypes';
import { RootState } from '@/store/store';
import { Business } from '@/types/Business';
import { yupResolver } from "@hookform/resolvers/yup";
import editBusinessSceneStyles from "./EditBusinessSceneStyles";



type props = BottomTabScreenProps<RootTabParamList, 'EditBusinessScene'>

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
}

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

    const{
        control,
        handleSubmit,
        formState: {errors}
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
        <TextInput
            style={editBusinessSceneStyles.textInputContainer}
        />
    )
};

export default EditBusinessScene;