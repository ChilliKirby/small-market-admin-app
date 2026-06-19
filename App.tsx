import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { useFonts } from "expo-font";
import { useEffect } from "react";
import { RootTabParamList } from "./NavigationTypes";
import AddBusinessScene from "./scenes/AddBusinessScene/AddBusinessScene";
import BrowseBusinessScene from "./scenes/BrowseBusinessScene/BrowseBusinessScene";
import EditBusinessImageScene from "./scenes/EditBusinessImageScene/EditBusinessImageScene";
import EditBusinessScene from "./scenes/EditBusinessScene/EditBusinessScene";
import HomeScene from "./scenes/HomeScene/HomeScene";
import LoginScene from "./scenes/LoginScene/LoginScene";
import SearchBusinessScene from "./scenes/SearchBusinessScene/SearchBusinessScene";
import ViewBusinessScene from "./scenes/ViewBusinessScene/ViewBusinessScene";
import { store } from "./store/store";

const Tab = createBottomTabNavigator<RootTabParamList>();
export default function App() {

   useEffect(() => {
    GoogleSignin.configure({
      webClientId: '829099996074-cd3679i82kc884vf92i5mhth92og8vll.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);
  
  const [loaded] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
  });

  if(!loaded){
    return null;
  }
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="LoginScene" component={LoginScene} />
          <Tab.Screen name="HomeScene" component={HomeScene} />
          <Tab.Screen name="AddBusinessScene" component={AddBusinessScene} />
          <Tab.Screen name="SearchBusinessScene" component={SearchBusinessScene} />
          <Tab.Screen name="BrowseBusinessScene" component={BrowseBusinessScene} />


         
          <Tab.Screen name="ViewBusinessScene" component={ViewBusinessScene} />
          <Tab.Screen name="EditBusinessScene" component={EditBusinessScene} />
          <Tab.Screen name="EditBusinessImageScene" component={EditBusinessImageScene} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
