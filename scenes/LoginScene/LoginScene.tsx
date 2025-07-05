import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import styles from '../Styles';
import GoogleSignInButton from './Components/GoogleSignInButton';

const LoginScene = () => {

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.safeAreaView}>
                    <Text>hihihih</Text>
                    <GoogleSignInButton />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
};

export default LoginScene;