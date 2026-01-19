import axios from "axios";

type getBusinessesData = {
    token: string,
    page: number,
}
const getBusinesses = async ({token, page}: getBusinessesData) => {

    try{
        const response = await axios.get(`http://192.168.86.123:3001/business/searchbusiness`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params: {
                page,
            }

        })
    } catch(error){

    }
}

export default getBusinesses;