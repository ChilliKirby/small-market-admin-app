import axios from "axios";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

type BusiniessData = {
    name: string;
    email?: string;
    phone?: string;
    address: string;
    website?: string;
    info?: string;
}

const addBusiness = async({name, email, phone, address, website, info}:BusiniessData) => {

    const user = useSelector((state: RootState) => state.admin)

    try{
        const response = axios.post('http://192.168.86.123:3001/auth/adminlogin', {
            jwt: user.token,
            name,
            email,
            phone,
            address,
            website,
            info
        }
        )
    } catch(error){
        console.log(error);
    }
}

export default addBusiness;