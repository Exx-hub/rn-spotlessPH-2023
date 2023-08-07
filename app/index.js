import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import HeroImage from "../components/HeroImage";
import Services from "../components/Services";
import Items from "../components/Items";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER  */}
      <Header />
      {/* SEARCH COMPONENT  */}
      <Search />
      {/* HERO HeroImage  */}
      <HeroImage />
      {/* SERVICES  */}
      <Services />
      {/* ADD ITEMS  */}
      <Items />
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
