import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import styles from '../Styles';
import GoogleSignInButton from './Components/GoogleSignInButton';

const LoginScene = () => {
    const x = useSelector((state: RootState) => state.admin.name);
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.safeAreaView}>
                    <Text>{x}</Text>
                    <GoogleSignInButton />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
};

export default LoginScene;