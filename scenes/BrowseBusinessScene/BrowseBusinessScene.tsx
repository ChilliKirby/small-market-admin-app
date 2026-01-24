import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styles from "../Styles";

const BrowseBusinessScene = () =>{

    // useEffect(() => {
    //     getBusinesses({
    //         token: "hjk",
    //         page: 1
    //     });
    // },[]);

    const [businesses, setBusinesses] = useState<Business[]>([]);

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={[styles.mainView, {alignItems : 'center'}]}>
                    <Text style={styles.fontLarge}>Browse Businesses </Text>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )

};

export default BrowseBusinessScene;