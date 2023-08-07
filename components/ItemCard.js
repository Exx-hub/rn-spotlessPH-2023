import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Button } from "react-native";

const ItemCard = ({ title, image, price }) => {
  return (
    <View style={styles.cardView}>
      <Image source={image} style={styles.cardImage} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <Pressable style={styles.button}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "#ececec",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,

    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textView: {},
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 12,
    color: "gray",
  },
  button: {
    marginLeft: "auto",
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    borderRadius: 5,
  },
});
