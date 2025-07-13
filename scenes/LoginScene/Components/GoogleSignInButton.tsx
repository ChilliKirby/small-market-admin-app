import { GoogleSignin, GoogleSigninButton, SignInResponse } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { View } from "react-native";
import { useDispatch } from 'react-redux';

import { setUser } from '@/store/adminSlice';
import { AppDispatch } from '../../../store/store';


const GoogleSignInButton = () => {

    const dispatch = useDispatch<AppDispatch>();

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo: SignInResponse = await GoogleSignin.signIn();


            const response = axios.post('http://192.168.86.123:3001/auth/adminlogin', {
                idToken: userInfo.data?.idToken,
            })
                .then(response => {
                    dispatch(setUser({ name: response.data.name, token: response.data.token}));
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });      
        } catch (error) {
            console.error('Google Sign-In error:', error);
        }
    }

    return (
        <View>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn} />
        </View>
    )
};

export default GoogleSignInButton;