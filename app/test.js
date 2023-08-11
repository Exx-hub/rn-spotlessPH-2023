import { View, Text } from "react-native";
import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Test = () => {
  const { name } = useContext(CartContext);
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Test;
