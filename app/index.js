import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";
import HeroImage from "../components/HeroImage";
import Services from "../components/Services";
import Items from "../components/Items";
import { Pressable } from "react-native";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Home = () => {
  const { name, state, dispatch } = useContext(CartContext);

  const { total, cartItems, numOfItems } = state;

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

      {total === 0 && cartItems < 1 ? null : (
        <Pressable
          style={{
            backgroundColor: "black",
            position: "absolute",
            width: "92%",
            bottom: 20,
            left: 0,

            padding: 10,
            marginHorizontal: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {numOfItems} {`${numOfItems > 1 ? "items" : "item"}`} | $ {total}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "white", marginVertical: 6 }}>
              extra charges might apply
            </Text>
          </View>

          <Pressable>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to pickup
            </Text>
          </Pressable>
        </Pressable>
      )}
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
