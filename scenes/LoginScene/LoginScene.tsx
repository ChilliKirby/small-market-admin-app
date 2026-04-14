import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import GoogleSignInButton from './Components/GoogleSignInButton';


import { RootState } from '@/store/store';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../NavigationTypes';
import styles from '../../Styles';
import LoginSceneStyles from './LoginSceneStyles';


type props = BottomTabScreenProps<RootTabParamList, 'LoginScene'>;
const LoginScene = ({navigation}: props) => {

    //Grab token from redux store
    const token = useSelector((state: RootState) => state.admin.name);

    //Navigate to Home Scene if login is successfull.
    useEffect(() => {
        if(token) {
            navigation.navigate('HomeScene');
        }
    },[token]);

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.mainView}>
                    <View style={LoginSceneStyles.mainContainer}>
                        <Text style={styles.fontLarge}> Small Market </Text>
                    <GoogleSignInButton />
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
};

export default LoginScene;