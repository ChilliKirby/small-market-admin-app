import { Platform } from "react-native";
import { Asset, ImageLibraryOptions, launchImageLibrary } from "react-native-image-picker";

/**
 * Allows user to open library and select image
 * @returns {Promise<string | null>}
 */
export const pickImage = async (): Promise<string | null> => {
    const options: ImageLibraryOptions = {
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 1
    };

    return new Promise((resolve, reject) => {
        launchImageLibrary(options, (response) => {
            console.log("in promise")
            if (response.didCancel) {
                resolve(null);
            } else if (response.errorCode) {
                reject(new Error(response.errorMessage || 'Image picker failed'));
            } else {
                const asset: Asset | undefined = response.assets?.[0];
                if (asset?.uri) {
                    const cleanedUri =
                        Platform.OS === 'ios'
                            ? asset.uri.replace('file://', '')
                            : asset.uri;
                    resolve(cleanedUri);
                } else {
                    resolve(null);
                }

            }
            console.log("in promise")
        })
    })
}