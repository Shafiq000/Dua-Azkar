import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Categories from "./TabScreens/Categories";
import Favorites from "./TabScreens/Favorites";
import { useAuthContext } from '../Navigations/AuthContext';
const Tab = createMaterialTopTabNavigator();

const Main = ({ navigation }) => {
  const { themeMode, setThemeMode } = useAuthContext();

  return (
    <View style={{ flex: 1, backgroundColor: themeMode === "dark" ? '#000' : '#fcba03' }}>
      <View style={styles.mainHeader}>
        <Text style={styles.toptext}>Dua & Azkar</Text>
        <Pressable onPress={() => navigation.navigate("Setting")}>
          <Image style={{ height: 25, width: 25 }} source={require('../Images/setting.png')} />
        </Pressable>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: themeMode === "dark" ? '#fcba03' : '#fcba03',
          tabBarInactiveTintColor: themeMode === "dark" ? '#fff' : '#000000',
          tabBarLabelStyle: { fontSize: 15, fontWeight: "500" },
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: themeMode === "dark" ? '#000' : '#fff',
          },
          tabBarIndicatorStyle: {
            backgroundColor:'#fcba03' ,
          },
        }}
      >
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: "row",
    height: 55,
    backgroundColor: "#fcba03",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  toptext: {
    flex: 1,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "Gilroy",
  },
});

export default Main;
