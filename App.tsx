import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { RootTabParamList } from "./NavigationTypes";
import AddBusinessScene from "./scenes/AddBusinessScene/AddBusinessScene";
import BrowseBusinessScene from "./scenes/BrowseBusinessScene/BrowseBusinessScene";
import EditBusinessScene from "./scenes/EditBusinessScene/EditBusinessScene";
import HomeScene from "./scenes/HomeScene/HomeScene";
import LoginScene from "./scenes/LoginScene/LoginScene";
import SearchBusinessScene from "./scenes/SearchBusinessScene/SearchBusinessScene";
import ViewBusinessScene from "./scenes/ViewBusinessScene/ViewBusinessScene";
import { store } from "./store/store";

GoogleSignin.configure({
  webClientId: '829099996074-cd3679i82kc884vf92i5mhth92og8vll.apps.googleusercontent.com',
  offlineAccess: true,
})

const Tab = createBottomTabNavigator<RootTabParamList>();
export default function App() {
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
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
