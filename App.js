import { StatusBar } from "expo-status-bar";
import React from "react";
import AppStack from "./Navigations/AppStack";
import AuthContextProvider from "./Navigations/AuthContext";
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded] = useFonts({
    'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'OpenSansExtraBoldItalic': require('./assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
    'OpenSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OswaldBold': require('./assets/fonts/Oswald-SemiBold.ttf'),
    'DMSans': require('./assets/fonts/DMSans_36pt-ExtraBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <> 
   
   <AuthContextProvider>
      <StatusBar
        headerTintColor="white"
        backgroundColor="#fcba03"
        translucent={false}
      />

      <AppStack />
    </AuthContextProvider>
    
    </>
  );
}
