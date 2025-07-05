import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import AddBusinessScene from "./scenes/AddBusinessScene/AddBusinessScene";
import HomeScene from "./scenes/HomeScene/HomeScene";
import LoginScene from "./scenes/LoginScene/LoginScene";
import { RootTabParamList } from "./scenes/NavigationTypes";

GoogleSignin.configure({
  webClientId: '829099996074-cd3679i82kc884vf92i5mhth92og8vll.apps.googleusercontent.com',
  offlineAccess: true,
})

const Tab = createBottomTabNavigator<RootTabParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="LoginScene" component={ LoginScene } />
        <Tab.Screen name="HomeScene" component={ HomeScene } />
        <Tab.Screen name="AddBusinessScene" component={ AddBusinessScene } />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
