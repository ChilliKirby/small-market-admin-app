import { Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';
import styles from '../Styles';
import searchBusinessStyles from './SearchBusinessStyles';

const SearchBusinessScene = () => {

    const [searchText, setSearchText] = useState("");
    
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={[styles.mainView, { alignItems: 'center' }]}>
                    <Text style={styles.fontLarge}> Search businesses</Text>

                    <TextInput 
                    style={searchBusinessStyles.inputContainerView} 
                    onChangeText={setSearchText}
                    value={searchText}
                    placeholder='Search businesses...'
                    />

                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

export default SearchBusinessScene;