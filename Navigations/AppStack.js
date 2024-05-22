import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Main from "../Screens/Main";
import Setting from "../Screens/Setting";
import Titles from "../Screens/TabScreens/CatagoryList/Titles";
import DuasData from "../Screens/TabScreens/CatagoryList/ListScreens/components/DuasData";
import MoreApps from "../Screens/MoreApps";
function AppStack() {
  return (
    <NavigationContainer>
   <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Main" component={Main}/>
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Titles" component={Titles} />
        <Stack.Screen name="DuasData" component={DuasData} />
        <Stack.Screen name="MoreApps" component={MoreApps} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default AppStack;