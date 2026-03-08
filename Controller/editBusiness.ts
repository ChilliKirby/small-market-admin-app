import axios from "axios";

type BusinessFormData = {
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

type UpdateBusinessData = {
    token: string,
    id: string,
    data: BusinessFormData,
}

const updateBusiness = async ({ token, id, data }: UpdateBusinessData) => {
console.log(token);
    try {
        const response = await axios.put('http://192.168.86.123:3001/admin/business/adminupdatebusiness',
            data,
            {
                params: {
                    id: id
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )

        return response;

    } catch (error) {
        console.log(error);
    }
};

export default updateBusiness;