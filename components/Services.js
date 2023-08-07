import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 0,
      title: "Laundry",
      image: require("../assets/services/laundry.png"),
    },
    {
      id: 1,
      title: "Wash and Press",
      image: require("../assets/services/press.png"),
    },
    {
      id: 2,
      title: "Dry Clean",
      image: require("../assets/services/dryclean.png"),
    },
    {
      id: 3,
      title: "Stain Removal",
      image: require("../assets/services/stain.png"),
    },
  ];
  return (
    <View style={styles.servicesView}>
      <Text style={styles.servicesTitle}>Services Offered:</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.cardsView}>
          {services.map((service) => (
            <ServiceCard {...service} key={service.id} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  servicesView: {
    marginTop: 10,
  },
  servicesTitle: {
    marginLeft: 7,
    marginBottom: 10,
    fontWeight: "500",
    fontSize: 16,
  },
  cardsView: {
    flexDirection: "row",
  },
});
