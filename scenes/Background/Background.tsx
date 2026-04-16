import React, { PropsWithChildren } from "react";
import { View } from "react-native";

import { ImageBackground } from "expo-image";
import backgroundStyles from "./BackgroundStyles";


const Background = ({ children }: PropsWithChildren) => {

    return (
        <View style={backgroundStyles.containerView}>
           <ImageBackground
                source={require('../../assets/background/background1.jpg')}
                style={{ flex: 1 }}
      
            >


            {children}

            {children && (
                <View style={{ flex: 1, zIndex: 1 }}>
                    {children}
                </View>
            )}
            </ImageBackground>
        </View>
    )
}

export default Background;