import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RootTabParamList } from "./scenes/NavigationTypes";

import HomeScene from "./scenes/HomeScene/HomeScene";

const Tab = createBottomTabNavigator<RootTabParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeScene" component={ HomeScene } />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
