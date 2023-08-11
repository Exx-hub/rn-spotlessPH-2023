import { View, Text, Pressable, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const PlusMinus = ({ quantity }) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Entypo name="minus" size={14} color="black" />
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable>
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
