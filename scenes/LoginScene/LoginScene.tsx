import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import GoogleSignInButton from './Components/GoogleSignInButton';


import { RootState } from '@/store/store';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../NavigationTypes';
import styles from '../../Styles';
import Background from '../Background/Background';
import loginSceneStyles from './LoginSceneStyles';


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
                <View style={{flex: 1}}>
                <Background>
                <View style={styles.mainView}>
                    <View style={loginSceneStyles.mainContainer}>
                        <Text style={styles.fontLarge}> Small Market </Text>
                        <Text style={styles.fontMedium}> Admin App</Text>

                        <View style={loginSceneStyles.emptySpaceView} />

                        <Text style={styles.fontMedium}> Login with Google</Text>
                    <GoogleSignInButton />
                    </View>
                </View>
                </Background>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
};

export default LoginScene;