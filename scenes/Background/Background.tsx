import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

import backgroundStyles from "./BackgroundStyles";


const Background = ({children} : PropsWithChildren) => {

    return(
        <View style={backgroundStyles.containerView}>
            <Svg 
                height='200'
                width="100%"
                viewBox="0 0 1440 320"
                style={backgroundStyles.wave}
            >
                <Path
                    fill="#6C63FF"
                    d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,154.7C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192V320H0Z"
                />
            </Svg>

            {children}

            {children && (
  <View style={{ flex: 1, zIndex: 1 }}>
    {children}
  </View>
)}
        </View>
    )
}

export default Background;