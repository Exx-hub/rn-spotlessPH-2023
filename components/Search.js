import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";

const Search = () => {
  return (
    <View style={styles.mainView}>
      <TextInput style={styles.textInput} placeholder="Search for Items" />
      <Ionicons name="search" size={22} color="#333" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    marginHorizontal: 8,
    padding: 5,
  },
  textInput: {
    flex: 1,
  },
});
