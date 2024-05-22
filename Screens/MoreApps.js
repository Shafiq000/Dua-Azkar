import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  Linking,
} from "react-native";
import LeftAerow from "react-native-vector-icons/Feather";
import { useAuthContext } from "../Navigations/AuthContext";
const jamaat_qibla =
  "https://play.google.com/store/apps/details?id=com.mslm.jamaat.qibla";
const jamaat = "https://play.google.com/store/apps/details?id=com.mslm.jamaat";
const jamaat_prayer =
  "https://play.google.com/store/apps/details?id=com.mslm.jamaat.prayertime";
const jamaat_calender =
  "https://play.google.com/store/apps/details?id=com.mslm.islamic.calendar";
const jamaat_tasbih =
  "https://play.google.com/store/apps/details?id=com.mslm.tasbih";
const asma_husna = "https://play.google.com/store/apps/details?id=com.mslm.allah.names";

const MoreApps = ({ navigation }) => {
  const { themeMode, setThemeMode } = useAuthContext();
  return (
    <SafeAreaView
      style={[
        styles.container,
        themeMode == "dark" && { backgroundColor: "black" },
      ]}>
      <View style={styles.mainHeader}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftAerow name="chevron-left" size={25} />
        </Pressable>
        <View style={styles.mainText}>
          <Text style={styles.headerText}>More Apps</Text>
        </View>
      </View>
      <View style={styles.upperRow}>
        <View>
          <Pressable onPress={() => Linking.openURL(jamaat)} style={styles.box}>
            <Image
              style={styles.innerimage}
              source={require("../Images/jamaat.png")}
            />
          </Pressable>
          <Text style={styles.outerText}>Jamaat</Text>
          <Text style={styles.lastText}></Text>
        </View>
        <View>
          <Pressable onPress={() => Linking.openURL(jamaat_qibla)} style={styles.box}>
            <Image
             style={[styles.innerimage,{ height:120,width:120,marginBottom:15}]}  
              source={require("../Images/qibla.png")}
            />
          </Pressable>
          <Text style={styles.outerText}>Jamaat</Text>
          <Text style={styles.lastText}>Qibla</Text>
        </View>
        <View>
          <Pressable
            onPress={() => Linking.openURL(jamaat_prayer)}
            style={styles.box}
          >
            <Image
              style={styles.innerimage}
              source={require("../Images/prayer1.png")}
            />
          </Pressable>
          <Text style={styles.outerText}>Jamaat</Text>
          <Text style={styles.lastText}> Prayer</Text>
        </View>
      </View>
      <View style={styles.lowerRow}>
        <View>
          <Pressable
            onPress={() => Linking.openURL(jamaat_calender)}
            style={styles.box}
          >
            <Image
              style={styles.innerimage}
              source={require("../Images/calender.png")}
            />
          </Pressable>
          <Text style={styles.outerText}>Jamaat</Text>
          <Text style={styles.lastText}>Calender</Text>
        </View>
        <View>
          <Pressable
            onPress={() => Linking.openURL(jamaat_tasbih)}
            style={styles.box}
          >
            <Image
              style={styles.innerimage}
              source={require("../Images/tasbih.png")}
            />
          </Pressable>
          <Text style={styles.outerText}>Jamaat</Text>
          <Text style={styles.lastText}>Tasbih</Text>
        </View>
        <View>
          <Pressable
            onPress={() => Linking.openURL(asma_husna)}
            style={styles.box}
          >
            <Image
              style={styles.innerimage}
              source={require("../Images/99.png")}
            />
          </Pressable>
          <Text style={styles.outerText}> Al-Sama </Text>
          <Text style={styles.lastText}> Ul-Husna </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoreApps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFFFF"
  },
  mainHeader: {
    flexDirection: "row",
    height: 55,
    backgroundColor: "#fcba03",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  mainText: {
    flex: 1,
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginRight: 15,
  },
  upperRow: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  lowerRow: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcba03",
    height: 65,
    width: 65,
    borderRadius: 7,
    marginTop: 20,
  },
  innerText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#fff",
  },
  outerText: {
    fontWeight: "600",
    color: "#fcba03",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: -5,
  },
  lastText: {
    fontWeight: "600",
    color: "#fcba03",
    alignSelf: "center",
    marginBottom: 1,
  },
  innerimage: {
    height: 70,
    width: 70,
    borderRadius: 7,
   
  },
});
