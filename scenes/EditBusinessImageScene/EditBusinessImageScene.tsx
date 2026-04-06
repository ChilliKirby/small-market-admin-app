import { Text, View } from 'react-native';

import { RootTabParamList } from '@/NavigationTypes';
import styles from '@/Styles';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type props = BottomTabScreenProps<RootTabParamList, "EditBusinessImageScene">;

const EditBusinessImageScene = ({businessId, imageUri, imagePosition}: props) => {

    return (
        <View style={[styles.mainView, {alignItems: 'center' } ]}>
            <Text style={styles.fontLarge}> Edit Business Image</Text>
        </View>
    )
}

export default EditBusinessImageScene;