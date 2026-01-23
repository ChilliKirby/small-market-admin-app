import { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import getBusinesses from "@/Controller/getBusinesses";

const BrowseBusinessScene = () =>{

    useEffect(() => {
        getBusinesses({
            token: "hjk",
            page: 6
        });
    },[]);

    return(
        <SafeAreaProvider>
            <SafeAreaView>

            </SafeAreaView>
        </SafeAreaProvider>
    )

};

export default BrowseBusinessScene;