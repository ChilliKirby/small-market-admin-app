
type getBusinessCategories = {
    token?: string;
}

const getBusinessCategories = async({token}: getBusinessCategories) => {
    
    const response = await fetch(`http://192.168.86.123:3001/admin/business/admingetbusinesscategories`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    const data = await response.json();
    
    return data;
}

export default getBusinessCategories;