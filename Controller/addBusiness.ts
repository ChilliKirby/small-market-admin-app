import axios from "axios";


type BusiniessData = {
    token: string,
    name: string;
    email?: string;
    phone?: string;
    address: string;
    website?: string;
    info?: string;
    mainImage?: Blob | null;
    mainImageUri?: string;
    imageFirst?: Blob | null;
    imageFirstUri?: string;
    imageSecond?: Blob | null;
    imageSecondUri?: string;
    imageThird?: Blob | null;
    imageThirdUri?: string;
}

const addBusiness = async ({ token, name, email, phone, address, website, info, mainImage, mainImageUri, imageFirst, imageFirstUri, imageSecond, imageSecondUri, imageThird, imageThirdUri }: BusiniessData) => {
console.log(mainImageUri);
    try {

        const formData = new FormData();
        
        if(mainImage && mainImageUri){
            formData.append("image",{
                uri: mainImageUri,
                type: mainImage.type,
                name: "main_image.jpg",
            } as any);
        }
console.log("hjghjgjh")
        if(imageFirst && imageFirstUri){
            formData.append("image",{
                uri: imageFirstUri,
                type: imageFirst.type,
                name: "first_image.jpg",
            } as any);
        }

        if(imageSecond && imageSecondUri){
            formData.append("image",{
                uri: imageSecondUri,
                type: imageSecond.type,
                name: "second_image.jpg",
            } as any);
        }

        if(imageThird && imageThirdUri){
            formData.append("image",{
                uri: imageThirdUri,
                type: imageThird.type,
                name: "third_image.jpg",
            } as any);
        }

        const response = axios.post('http://192.168.86.123:3001/business/addbusiness', {
            jwt: token,
            name,
            email,
            phone,
            address,
            website,
            info
        }
        )
    } catch (error) {
        console.log(error);
    }
}

export default addBusiness;