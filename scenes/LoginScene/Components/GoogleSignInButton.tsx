import { GoogleSignin, GoogleSigninButton, SignInResponse } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { View } from "react-native";

const GoogleSignInButton = () => {

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo: SignInResponse = await GoogleSignin.signIn();
            

            axios.post('http://192.168.86.123:3001/auth/adminlogin',{
                idToken: userInfo.data?.idToken,
            })
                .then(response => {
                    
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