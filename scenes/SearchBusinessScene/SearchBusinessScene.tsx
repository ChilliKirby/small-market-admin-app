import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import styles from '../../Styles';
import searchBusinessStyles from './SearchBusinessStyles';

const SearchBusinessScene = () => {

    //Search input
    const [searchText, setSearchText] = useState(""); 

    //Current page of business results
    const [page, setPage] = useState(1);

    type Item = {
        id: string;
        name: string;
        mainPhotoUrl: string;
    }

    //Business results array
    const [results, setResults] = useState([]);

    //load more business results
    const search = () => {
        //todo///////////////////////////////
        
    }
    
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={[styles.mainView, { alignItems: 'center' }]}>
                    <Text style={styles.fontLarge}> Search businesses</Text>

                    <View style={searchBusinessStyles.searchBarView}>
                    <TextInput 
                    style={searchBusinessStyles.inputContainerView} 
                    onChangeText={setSearchText}
                    value={searchText}
                    placeholder='Search businesses...'
                    />

                    {results.map((item) => (
                        <Text key={item}> {item}</Text>
                    ))}

                    <TouchableOpacity onPress={search}>
                        <Feather name='camera' size={28} color="#007AFF"/>
                    </TouchableOpacity>
                    </View>


                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

export default SearchBusinessScene;