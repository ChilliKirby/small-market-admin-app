import axios from "axios";

type UpdateBusinessData = {
    token: string,
    id: string,
    data: FormData,
}
const updateBusiness = async ({ token, id, data }: UpdateBusinessData) => {

    try {
        const response = await axios.put('http://192.168.86.123:3001/admin/business/adminupdatebusiness',
            data,
            {
                params: {
                    id
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