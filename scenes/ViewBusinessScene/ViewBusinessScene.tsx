import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import getBusiness from "../../Controller/getBusiness";
import { RootTabParamList } from "../NavigationTypes";


type props = BottomTabScreenProps<RootTabParamList, 'ViewBusinessScene'>

interface Business {
    _id: string,
    name: string,
    email: string,
    phone: string,
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
const ViewBusinessScene = ({ route }: props) => {

    const [business, setBusiness] = useState<Business | null>();

const user = useSelector((state: RootState) => state.admin);

    const id =" route.params.businessId;"
    const token = user.token;

    useEffect(() => {
       const fetchBusiness = async() => {
        try{
            const response = await getBusiness({token, id});
            console.log(response);
            setBusiness(response)
        } catch(error){
            console.log(error);
        }
       };

       fetchBusiness();
    },[]);
    
    return (
       
        <View>
            {business ? (
            <Text>
                {business.name}
            </Text>
            ) : (
                <Text>loading</Text>
            )
        }
        </View>
        
    )
};

export default ViewBusinessScene;