import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import styles from '../Styles';

const SearchBusinessScene = () => {

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={[styles.mainView, {alignItems: 'center'}]}>
                    <Text style={styles.fontLarge}> Search businesses</Text>
                     
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
       
    )
}

export default SearchBusinessScene;