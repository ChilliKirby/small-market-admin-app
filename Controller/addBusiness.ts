import axios from "axios";


type BusiniessData = {
    token: string,
    name: string;
    email?: string;
    phone?: string;
    address: string;
    website?: string;
    info?: string;
    mainImage?: Blob | null;
    imageFirst?: Blob | null;
    imageSecond?: Blob | null;
    imageThird?: Blob | null;
}

const addBusiness = async ({ token, name, email, phone, address, website, info, mainImage, imageFirst, imageSecond, imageThird }: BusiniessData) => {

    try {
        const response = axios.post('http://192.168.86.123:3001/business/addbusiness', {
            jwt: token,
            name,
            email,
            phone,
            address,
            website,
            info
        }
        )
    } catch (error) {
        console.log("error");
    }
}

export default addBusiness;