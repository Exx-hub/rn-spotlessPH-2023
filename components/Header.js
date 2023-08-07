import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.mainView}>
      <Ionicons name="ios-location-sharp" size={24} color="#ff4040" />
      <View>
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.address}>21 Falcon St., Fairview, QC</Text>
      </View>

      <Image source={require("../assets/me.jpeg")} style={styles.avatar} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    padding: 5,
    paddingTop: 10,
    alignItems: "center",
  },
  homeText: {
    fontWeight: "bold",
  },
  address: {
    color: "gray",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginLeft: "auto",
  },
});
