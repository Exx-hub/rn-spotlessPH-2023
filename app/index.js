import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import HeroImage from "../components/HeroImage";
import Services from "../components/Services";
import Items from "../components/Items";
import BottomBar from "../components/BottomBar";

const Home = () => {
  return (
    <>
      <ScrollView style={styles.container}>
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
      </ScrollView>

      <BottomBar isHome />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
