import axios from "axios";

type editBusinessImage = {
    token: string,
    businessId: string,
    image: Blob | null,
    uri: string,
    imagePosition: string,
}

const editBusinessImage = async ({ token, businessId, image, uri, imagePosition }: editBusinessImage) => {

    try {
        const formData = new FormData();

        if (image) {
            formData.append("image", {
                uri: uri,
                type: image.type,
                name: imagePosition + ".jpg",
            } as any);
        }

        formData.append('imagePosition', imagePosition);
        
        const response = await axios.put(`http://192.168.86.123:3001/admin/business/updatebusinessimage/${businessId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/formdata"
            },
        });

        return businessId;
    } catch (error) {
        console.log(error);
    }
}