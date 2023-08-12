import { View, Text, Pressable, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const PlusMinus = ({ quantity, title }) => {
  const { dispatch } = useContext(CartContext);

  const increaseItemQty = () => {
    dispatch({ type: "INCREMENT", payload: title });
  };

  const decreaseItemQty = () => {
    if (quantity === 1) {
      dispatch({ type: "REMOVE_ITEM", payload: title });
    } else {
      dispatch({ type: "DECREMENT", payload: title });
    }
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={decreaseItemQty}>
        <Entypo name="minus" size={14} color="black" />
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={increaseItemQty}>
        <Entypo name="plus" size={14} color="black" />
      </Pressable>
    </View>
  );
};

export default PlusMinus;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    padding: 6,
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
  },
});
