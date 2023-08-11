import { View, Text, Pressable, StyleSheet } from "react-native";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Alert } from "react-native";

const BottomBar = ({ isHome, isPickup, address, time, pickupDate, deliveryDate }) => {
  const { state, dispatch } = useContext(CartContext);

  const { total, cartItems, numOfItems } = state;

  //   console.log({ total, cartItems, numOfItems });

  //   console.log({ address, time, pickupDate, deliveryDate });

  const router = useRouter();

  const handlePress = () => {
    if (isHome) {
      router.push("/pickup");
    } else if (isPickup) {
      if (!address || !time || !deliveryDate || !pickupDate) {
        Alert.alert("All fields are required!");
        return;
      }

      dispatch({
        type: "CONFIRM_PICKUP_DETAILS",
        payload: { address, time, deliveryDate, pickupDate },
      });

      router.push("/checkout");
    }
  };
  return (
    <>
      {total === 0 && cartItems < 1 ? null : (
        <View style={styles.bottomBarContainer}>
          <View>
            <Text style={styles.mainText}>
              {numOfItems} {`${numOfItems > 1 ? "items" : "item"}`} | $ {total}
            </Text>
            <Text style={styles.subText}>extra charges might apply</Text>
          </View>

          <Pressable onPress={handlePress}>
            <Text style={styles.btnText}>{isHome ? "pickup" : "checkout"}</Text>
            <View style={styles.btnIcon}>
              <AntDesign name="rightcircleo" size={20} color="white" />
            </View>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomBarContainer: {
    backgroundColor: "black",
    position: "absolute",
    width: "92%",
    bottom: 20,
    left: 0,
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
  subText: {
    fontSize: 12,
    fontWeight: "400",
    color: "white",
    marginVertical: 6,
  },
  btnText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
    marginRight: 5,
  },
  btnIcon: {
    alignSelf: "flex-end",
    marginTop: 3,
    marginRight: 3,
  },
});
