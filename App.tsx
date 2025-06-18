import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import AddBusinessScene from "./scenes/AddBusinessScene/AddBusinessScene";
import HomeScene from "./scenes/HomeScene/HomeScene";
import { RootTabParamList } from "./scenes/NavigationTypes";



const Tab = createBottomTabNavigator<RootTabParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeScene" component={ HomeScene } />
        <Tab.Screen name="AddBusinessScene" component={ AddBusinessScene } />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
