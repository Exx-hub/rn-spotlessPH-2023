// import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  //   const [fontsLoaded] = useFonts({
  //     Marker: require("../assets/fonts/PermanentMarker-Regular.ttf"),
  //   });

  //   if (!fontsLoaded) {
  //     return null;
  //   }

  return <Stack screenOptions={{ headerShown: false }} />;
};

export default RootLayout;
