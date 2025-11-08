import axios from "axios";

type searchBusinessData = {
    token: string,
    businessName: string,
}
const searchBusiness = async ({token, businessName}: searchBusinessData) => {

    try{
        const response = await axios.get(`http://192.168.86.123:3001/business/searchbusiness?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })

        console.log(response);
    }catch(error){

    }
};

export default searchBusiness;