import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER  */}
      <Header />
      {/* SEARCH COMPONENT  */}
      {/* HERO IMAGE  */}
      {/* SERVICES  */}
      {/* ADD ITEMS  */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
