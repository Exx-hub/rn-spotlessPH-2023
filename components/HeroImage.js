import { ImageBackground, View } from "react-native";

const HeroImage = () => {
  return (
    <View style={{ marginHorizontal: 5, marginTop: 5 }}>
      <ImageBackground
        style={{ height: 200, width: "100%" }}
        source={require("../assets/laundry-hero.jpg")}
      ></ImageBackground>
    </View>
  );
};

export default HeroImage;
