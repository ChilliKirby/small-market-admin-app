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
        const response = await axios.get(`http://192.168.86.123:3001/business/admingetbusiness`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params:{
                id: "69a9f6cc3e85bb7f15910b95"
            }
        });

        if(response){
            console.log(response.data.response);
            return response.data.business
        }
    } catch(error){
        console.log(error);
    }
};

export default getBusiness;