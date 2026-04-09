import { RootTabParamList } from '@/NavigationTypes';
import { pickImage } from '@/Utilities/pickImage';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';

import styles from '@/Styles';
import { useState } from 'react';
import editBusinessImageSceneStyles from './EditBusinessImageSceneStyles';

type props = BottomTabScreenProps<RootTabParamList, "EditBusinessImageScene">;

/**
 * This scene allows user to change one of the business images
 * @param param0 -> route.params.businessId - id of the business document
 * @param param1 -> route.params.imagePosition - The image position desired for this image
 * @param param2 -> route.params.imageUri - The image uri of the current image being used.
 * @returns 
 */
const EditBusinessImageScene = ({route}: props) => {

    const [imageUri, setImageUri] = useState<string>(route.params.imageUri);

    const selectImage = async () => {
        try{
            const image = await pickImage();

            if(image){
                setImageUri(image);
            }

        } catch(error){
            console.log(error);
        }
    }

    return (
        <View style={[styles.mainView, {alignItems: 'center' } ]}>
            <Text style={styles.fontLarge}> Edit Business Image</Text>

            <Image
                source={
                    route.params.imageUri ? 
                        {uri: imageUri}
                        : require("../../assets/images/no-image.png")   
                }
                style={editBusinessImageSceneStyles.mainImageLarge}
            />
        </View>
    )
};

export default EditBusinessImageScene;