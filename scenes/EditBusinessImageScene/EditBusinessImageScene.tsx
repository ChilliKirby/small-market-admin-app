import { Text, View } from 'react-native';

import styles from '@/Styles';


const EditBusinessImageScene = () => {

    return (
        <View style={[styles.mainView, {alignItems: 'center' } ]}>
            <Text style={styles.fontLarge}> Edit Business Image</Text>
        </View>
    )
}

export default EditBusinessImageScene;