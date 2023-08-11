import { View, Text } from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Checkout = () => {
  const { state } = useContext(CartContext);
  console.log(state);
  return (
    <View>
      <Text>Checkout</Text>
    </View>
  );
};

export default Checkout;
