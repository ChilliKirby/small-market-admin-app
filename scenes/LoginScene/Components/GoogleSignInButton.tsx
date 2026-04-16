import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';

import { setUser } from '@/store/adminSlice';
import styles from '@/Styles';
import { AppDispatch } from '../../../store/store';


const GoogleSignInButton = () => {

    const dispatch = useDispatch<AppDispatch>();

    // const signIn = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const userInfo: SignInResponse = await GoogleSignin.signIn();


    //         const response = axios.post('http://192.168.86.123:3001/auth/adminlogin', {
    //             idToken: userInfo.data?.idToken,
    //         })
    //             .then(response => {
    //                 dispatch(setUser({ name: response.data.name, token: response.data.token}));
    //                 console.log(response.data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });      
    //     } catch (error) {
    //         console.error('Google Sign-In error:', error);
    //     }
    // }

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
            {/* <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                // onPress={signIn}
                /> */}

                <TouchableOpacity onPress={signIn}>
                    <Text style={styles.fontLarge}> fhifh</Text>
                </TouchableOpacity>
        </View>
    )
};

export default GoogleSignInButton;