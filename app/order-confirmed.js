import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

const OrderConfirmed = () => {
  const router = useRouter();
  return (
    <View style={styles.mainContainer}>
      <Feather name="check-circle" size={50} color="black" />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Thank you!</Text>
        <Text style={styles.fontLight}>Your Order Has Been Placed</Text>
      </View>
      <Pressable onPress={() => router.replace("/")} style={styles.btn}>
        <Text style={styles.btnText}>back to home</Text>
      </Pressable>
    </View>
  );
};

export default OrderConfirmed;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 5,
  },
  fontLight: {
    fontWeight: "200",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 5,
    marginTop: 20,
  },
  btnText: {
    color: "white",
  },
});
