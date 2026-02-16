import axios from "axios";


type getBusinessData = {
    token?: string,
    id?: string,
}
const getBusiness = async({token, id}: getBusinessData) => {
    try{
        const response = await axios.get(`http://192.168.86.123:3001/business/admingetbusiness`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params:{
                id: "699283cdfc799589a159bd35"
            }
        });

        if(response){
            return response.data.business
        }
    } catch(error){
        console.log(error);
    }
};

export default getBusiness;