import axios from "axios";


type BusiniessData = {
    token: string,
    name: string;
    email?: string;
    phone?: string;
    address: string;
    website?: string;
    info?: string;
}

const addBusiness = async({token, name, email, phone, address, website, info}:BusiniessData) => {
    console.log("her");
    
    try{
        const response = axios.post('http://192.168.86.123:3001/business/addbusiness', {
            jwt: token,
            name,
            email,
            phone,
            address,
            website,
            info
        }
        ).then(response => {
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.log(error);
                        });      
    } catch(error){
        console.log("error");
    }
}

export default addBusiness;