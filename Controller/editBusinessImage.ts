import axios from "axios";

type editBusinessImage = {
    token: string,
    businessId: string,
    image: Blob | null,
    uri: string,
    imagePosition: string,
}

/**
 * 
 * @param param0 - token: string -> JWT for authorization
 * @param param1 - businessId: string -> id of business in mongo db.
 * @param param2 - image: blob -> new image for business
 * @param param3 - uri: string -> uri of new image
 * @param param4 - imagePosition: string -> Used to set position of image. "0" for main, "1" for first, "2" for second, "3" for third. 
 * @returns 
 */
const editBusinessImage = async (token: string, businessId: string, image: Blob | null, uri: string, imagePosition: string) => {
   
        try {
            const formData = new FormData();

            if(!image){
                return;
            }
            formData.append("image", {
                uri: uri.startsWith("file://") ? uri : `file://${uri}`,
                type: image.type,
                name: imagePosition + ".jpg",
            } as any);

            formData.append('imagePosition', imagePosition);            

            const response = await axios.put(`http://192.168.86.123:3001/admin/business/adminupdatebusinessimage/${businessId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                },
            });

            console.log("response is " + response)
           

            return businessId;
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message); // Safe to access .message here
            } else {
                console.log(String(error)); // Handle non-Error throws (strings, etc.)
            }
        }
    
};

export default editBusinessImage;