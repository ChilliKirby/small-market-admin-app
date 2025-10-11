import axios from "axios";


type BusiniessData = {
    token: string,
    name: string;
    email?: string;
    phone?: string;
    street: string;
    city: string;
    state: string;
    zipcode: string;
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

const addBusiness = async ({ token, name, email, phone, street, city, state, zipcode, website, info, mainImage, mainImageUri, imageFirst, imageFirstUri, imageSecond, imageSecondUri, imageThird, imageThirdUri }: BusiniessData) => {
    console.log("in add");
    const formData = new FormData();

    if (mainImage && mainImageUri) {
        formData.append("image", {
            uri: mainImageUri,
            type: mainImage.type,
            name: "main_image.jpg",
        } as any);
    }
    if (imageFirst && imageFirstUri) {
        formData.append("image", {
            uri: imageFirstUri,
            type: imageFirst.type,
            name: "first_image.jpg",
        } as any);
    }

    if (imageSecond && imageSecondUri) {
        formData.append("image", {
            uri: imageSecondUri,
            type: imageSecond.type,
            name: "second_image.jpg",
        } as any);
    }

    if (imageThird && imageThirdUri) {
        formData.append("image", {
            uri: imageThirdUri,
            type: imageThird.type,
            name: "third_image.jpg",
        } as any);
    }

    formData.append('jwt', token);
    formData.append('name', name);

    if (email) {
        formData.append('email', email);
    };

    if (phone) {
        formData.append('phone', phone);
    };

    formData.append('street', street);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zipcode', zipcode);
    

    if (website) {
        formData.append('website', website);
    };

    if (info) {
        formData.append('info', info);
    };

    try {

        // const response = axios.post('http://192.168.86.123:3001/business/addbusiness', {
        //     jwt: token,
        //     name,
        //     email,
        //     phone,
        //     address,
        //     website,
        //     info
        // }
        //)

        const response = await axios.post('http://192.168.86.123:3001/business/addbusiness', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        console.log("Upload success: ", response.data);
    } catch (error) {
        console.log(error);
    }
}

export default addBusiness;