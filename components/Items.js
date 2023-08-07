import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";

const Items = () => {
  const items = [
    {
      id: 0,
      title: "Blazer",
      price: "₱50",
      image: require("../assets/items/blazer.png"),
    },
    {
      id: 1,
      title: "Dress",
      price: "₱50",
      image: require("../assets/items/dress.png"),
    },
    {
      id: 2,
      title: "Hoodie",
      price: "₱50",
      image: require("../assets/items/hoodie.png"),
    },
    {
      id: 3,
      title: "Jersey",
      price: "₱20",
      image: require("../assets/items/jersey.png"),
    },
    {
      id: 4,
      title: "Shirt",
      price: "₱25",
      image: require("../assets/items/shirt.png"),
    },
    {
      id: 5,
      title: "Shorts",
      price: "₱20",
      image: require("../assets/items/shorts.png"),
    },
    {
      id: 6,
      title: "Sleeveless",
      price: "₱25",
      image: require("../assets/items/sleevelss.png"),
    },
    {
      id: 7,
      title: "Trousers",
      price: "₱30",
      image: require("../assets/items/trousers.png"),
    },
  ];
  return (
    <View style={styles.itemsView}>
      <Text style={styles.itemsTitle}>Quick Add:</Text>

      <ScrollView>
        <View style={styles.cardsView}>
          {items.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  itemsView: {
    marginTop: 10,
    flex: 1,
  },
  itemsTitle: {
    marginLeft: 7,
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 16,
  },
  cardsView: {
    flex: 1,
  },
});
