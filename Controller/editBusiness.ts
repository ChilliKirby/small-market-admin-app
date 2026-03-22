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

const editBusiness = async ({ token, id, data }: UpdateBusinessData) => {
    try {
        const response = await axios.put(`http://192.168.86.123:3001/admin/business/adminupdatebusiness/${id}`,
            data,
            {
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

export default editBusiness;