import axios from "axios";


type getBusinessData = {
    token?: string,
    id?: string,
}

/**
 * 
 * @param token - jwt for user
 * @param id - business MongoDB id
 * @returns - business info (name, email, etc...)
 */
const getBusiness = async({token, id}: getBusinessData) => {
    try{
        const response = await axios.get(`http://192.168.86.123:3001/admin/business/admingetbusiness`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params:{
                id: id
            }
        });

        if(response){
            console.log("xxxxxxxxxxxxxx")
            console.log(response.data);
            return response.data.businessWithImages
        }
    } catch(error){
        console.log(error);
    }
};

export default getBusiness;