// import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import { Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RootLayout = () => {
  //   const [fontsLoaded] = useFonts({
  //     Marker: require("../assets/fonts/PermanentMarker-Regular.ttf"),
  //   });

  //   if (!fontsLoaded) {
  //     return null;
  //   }

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: () => <Text style={{ fontSize: 18, fontWeight: 100 }}>SPOTLESS PH</Text>,
        headerLeft: () => (
          <Image source={require("../assets/splash.jpg")} style={{ width: 40, height: 40 }} />
        ),
        headerRight: () => <Ionicons name="ios-menu-outline" size={24} color="black" />,
      }}
    />
  );
};

export default RootLayout;
