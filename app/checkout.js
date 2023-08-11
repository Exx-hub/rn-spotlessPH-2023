import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import CartItem from "../components/CartItem";

const Checkout = () => {
  const { state } = useContext(CartContext);

  const { cartItems, total, pickupDetails } = state;
  const router = useRouter();
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>

        <View style={{ marginTop: 20 }}>
          <View style={styles.sectionContainer}>
            <Text style={styles.headingText}>Your Bucket</Text>
            {cartItems?.map((item) => (
              <CartItem {...item} key={item.title} />
            ))}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.headingText}>Billing Details</Text>
            <View style={styles.billingDetailsContainer}>
              <View style={styles.billingItem}>
                <Text style={styles.textLeft}>Item Total</Text>
                <Text style={styles.fontBold}>₱{total}</Text>
              </View>
              <View style={styles.billingItem}>
                <Text style={styles.textLeft}>Delivery Fee</Text>
                <Text style={styles.fontLight}>FREE</Text>
              </View>
              <View
                style={{ borderBottomColor: "#ececec", borderBottomWidth: 2, marginVertical: 5 }}
              />
              <View style={styles.billingItem}>
                <Text style={styles.textLeft}>pickup date</Text>
                <Text style={styles.fontLight}>{pickupDetails.pickupDate}</Text>
              </View>
              <View style={styles.billingItem}>
                <Text style={styles.textLeft}>pickup time</Text>
                <Text style={styles.fontLight}>{pickupDetails.time}</Text>
              </View>
              <View style={styles.billingItem}>
                <Text style={styles.textLeft}>return delivery</Text>
                <Text style={styles.fontLight}>{pickupDetails.deliveryDate}</Text>
              </View>
              <View
                style={{ borderBottomColor: "#ececec", borderBottomWidth: 2, marginVertical: 5 }}
              />
              <View style={styles.billingItem}>
                <Text>To Pay</Text>
                <Text style={styles.fontBold}>₱{total}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomBar}>
          <View>
            <Text style={styles.fontBold}>₱{total}</Text>
            <Text style={styles.fontLight}>View Detailed Bill</Text>
          </View>

          <Pressable style={styles.confirmBtn}>
            <Text style={styles.btnText}>Confirm Checkout</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    position: "relative",
  },
  backIcon: {
    top: 5,
    left: 5,
    position: "absolute",
  },
  sectionContainer: {
    margin: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  billingDetailsContainer: {
    backgroundColor: "white",
    padding: 10,
  },
  billingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  textLeft: {
    color: "darkgray",
  },
  fontBold: {
    fontWeight: "bold",
  },
  fontLight: {
    fontWeight: "200",
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  confirmBtn: {
    backgroundColor: "black",
    padding: 8,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
  },
});
