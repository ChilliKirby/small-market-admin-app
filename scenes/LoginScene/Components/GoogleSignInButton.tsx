import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';

import { setUser } from '@/store/adminSlice';
import styles from '@/Styles';
import { AppDispatch } from '../../../store/store';
import loginSceneStyles from '../LoginSceneStyles';


/**
 * This component returns a custom made button that signs user into the app
 * using their Google account. 
 * @returns Google sign in button
 */
const GoogleSignInButton = () => {

    const dispatch = useDispatch<AppDispatch>();

    /**
     * Attempts to sign user with Google account. If successful, 
     * sets info of store using the Google account name and JWT
     * @returns 
     */
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();

            const userInfo = await GoogleSignin.signIn();

            if (!userInfo || !userInfo.data?.idToken) {
                console.log('No user info returned');
                return;
            }

            const response = await axios.post(
                'http://192.168.86.123:3001/auth/adminlogin',
                {
                    idToken: userInfo.data.idToken,
                }
            );

            dispatch(setUser({
                name: response.data.name,
                token: response.data.token,
            }));

            console.log(response.data);

        } catch (error) {
            console.log('Google Sign-In error:', error);
        }
    };

    return (
        <View>
            <TouchableOpacity onPress={signIn} style={loginSceneStyles.buttonView}>
                <Text style={styles.fontRegularBlack}> Sign in</Text>
            </TouchableOpacity>
        </View>
    )
};

export default GoogleSignInButton;