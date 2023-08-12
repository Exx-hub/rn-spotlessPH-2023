import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PlusMinus from "./PlusMinus";

const CartItem = ({ title, price, quantity }) => {
  return (
    <View style={styles.cartItemContainer}>
      <Text style={styles.itemText}>{title}</Text>
      <PlusMinus quantity={quantity} title={title} />
      <View style={{ minWidth: 35 }}>
        <Text style={styles.itemText}>₱{price * quantity}</Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  itemText: {
    fontWeight: "bold",
  },
});
