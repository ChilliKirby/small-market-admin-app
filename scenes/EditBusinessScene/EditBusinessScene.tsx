import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import getBusiness from '@/Controller/getBusiness';
import { RootTabParamList } from '@/NavigationTypes';
import { RootState } from '@/store/store';
import { Business } from '@/types/Business';


type props = BottomTabScreenProps<RootTabParamList, 'EditBusinessScene'>

const EditBusinessScene = ({ navigation, route }: props) => {

    const token = useSelector((state: RootState) => state.admin.token)
    const id = route.params.businessId

    const [business, setBusiness] = useState<Business | null>();

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
    },[]);



    return (
        <Text>
            {business?.name}
        </Text>
    )
};

export default EditBusinessScene;