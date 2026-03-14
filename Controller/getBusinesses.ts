import axios from "axios";

type getBusinessesData = {
    token: string,
    page: number,
}
const getBusinesses = async ({token, page}: getBusinessesData) => {
    console.log(token);
    try{
        const response = await axios.get(`http://192.168.86.123:3001/admin/business/admingetbusinesses`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                page,
            }

        })
        console.log(response.data.businesses)
        if(response.data.businesses){
            return response.data
        }
    } catch(error){
        console.log(error);
    }
}

export default getBusinesses;