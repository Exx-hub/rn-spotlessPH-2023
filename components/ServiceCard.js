import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ServiceCard = ({ title, image }) => {
  return (
    <View style={styles.cardView}>
      <Image source={image} style={styles.cardImage} />
      <Text>{title}</Text>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  cardView: {
    width: 120,
    backgroundColor: "#ececec",
    alignItems: "center",
    padding: 5,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
});
