import { Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';
import styles from '../Styles';
import searchBusinessStyles from './SearchBusinessStyles';

const SearchBusinessScene = () => {

    //Search input
    const [searchText, setSearchText] = useState(""); 

    // //Number of items per page to display
    // const itemsPerPage = 20;

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
    const load = () => {
        //todo///////////////////////////////

    }
    
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

                    {results.map((item) => (
                        <Text key={item}> {item}</Text>
                    ))}


                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

export default SearchBusinessScene;