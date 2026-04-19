import { RootTabParamList } from '@/NavigationTypes';
import { pickImage } from '@/Utilities/pickImage';
import { Feather } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';
import { Alert, Image, Text, TouchableOpacity, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import editBusinessImage from '@/Controller/editBusinessImage';
import { RootState } from '@/store/store';
import styles from '@/Styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Background from '../Background/Background';
import editBusinessImageSceneStyles from './EditBusinessImageSceneStyles';

type props = BottomTabScreenProps<RootTabParamList, "EditBusinessImageScene">;

/**
 * This scene allows user to change one of the business images
 * @param param0 -> route.params.businessId - id of the business document
 * @param param1 -> route.params.imagePosition - The image position desired for this image
 * @param param2 -> route.params.imageUri - The image uri of the current image being used.
 * @returns 
 */
const EditBusinessImageScene = ({ navigation, route }: props) => {

    const token = useSelector((state: RootState) => state.admin.token);
    const [imageUri, setImageUri] = useState<string>(route.params.imageUri);
    const [blob, setBlob] = useState<Blob | null>(null);
    const [saveText, setSaveText] = useState(false);

    useEffect(() => {
        setImageUri(route.params.imageUri);
    }, [route.params.imageUri]);

    const selectImage = async () => {
        try {
            const image = await pickImage();

            if (!image) return;

            const response = await fetch(image);
            if (image) {
                setBlob(await response.blob());
                setImageUri(image);
                setSaveText(true);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const saveImage = async () => {
        try {
            const response = await editBusinessImage(token, route.params.businessId, blob, imageUri, route.params.imagePosition);

            if (response) {
                navigation.navigate("ViewBusinessScene", {
                    businessId: route.params.businessId,
                })
            }

        } catch {
            Alert.alert("Service unavailable");
        }

    }

    return (
        <SafeAreaProvider style={{ height: "100%" }}>
            <SafeAreaView style={{ flex: 1 }}>
                <Background>
                    <View style={[styles.mainView, { alignItems: 'center' }]}>
                        <Text style={styles.fontLarge}> Edit Business Image {imageUri}</Text>

                        <Image
                            source={
                                imageUri ?
                                    { uri: imageUri }
                                    : require("../../assets/images/no-image.png")
                            }
                            style={editBusinessImageSceneStyles.mainImageLarge}
                        />

                        <TouchableOpacity style={editBusinessImageSceneStyles.containerIcon} onPress={selectImage}>
                            <Feather name='camera' size={28} color="#007AFF" />
                        </TouchableOpacity>

                        {saveText == true &&
                            <TouchableOpacity onPress={saveImage}>
                                <Text style={styles.fontEdit}> Save new image? </Text>
                            </TouchableOpacity>
                        }
                    </View>
                </Background>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default EditBusinessImageScene;