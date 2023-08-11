import { View, Text, TextInput, ScrollView, Pressable, StyleSheet, FlatList } from "react-native";
import BottomBar from "../components/BottomBar";
import { useState } from "react";

const PickupDetails = () => {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31,
  ];

  const deliveryTimes = [
    {
      id: "0",
      name: "Next Day",
    },
    {
      id: "1",
      name: "2-3 Days",
    },
    {
      id: "2",
      name: "3-4 Days",
    },
    {
      id: "3",
      name: "4-5 Days",
    },
    {
      id: "4",
      name: "5-6 Days",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "3",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  const [address, setAddress] = useState("");
  const [pickupDate, setPickupDate] = useState(new Date().getDate());
  const [time, setTime] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);

  console.log({ address, pickupDate, time, deliveryDate });

  return (
    <>
      <View style={styles.mainContainer}>
        <View>
          {/* textarea  */}
          <Text style={styles.labelText}>Enter Address</Text>
          <TextInput onChangeText={(text) => setAddress(text)} style={styles.addressInput} />

          {/* pickup date  */}
          <Text style={styles.labelText}>Pickup Date</Text>
          <ScrollView horizontal style={styles.scrollView}>
            {days.map((day) => (
              <Pressable
                key={day}
                onPress={() => setPickupDate(day)}
                style={[
                  styles.pickupDate,
                  { backgroundColor: pickupDate === day ? "black" : "#ececec" },
                ]}
              >
                <Text
                  style={{
                    color: pickupDate === day ? "white" : "black",
                  }}
                >
                  {day}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          {/* select time  */}
          <Text style={styles.labelText}>Select Time</Text>
          <ScrollView horizontal style={styles.scrollView}>
            {times.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => setTime(item.time)}
                style={[
                  styles.selectTime,
                  { backgroundColor: time === item.time ? "black" : "white" },
                ]}
              >
                <Text
                  style={{
                    color: time === item.time ? "white" : "black",
                  }}
                >
                  {item.time}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          {/* delivery  */}
          <Text style={styles.labelText}>Select Delivery</Text>
          <ScrollView horizontal style={styles.scrollView}>
            {deliveryTimes.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => setDeliveryDate(item.name)}
                style={[
                  styles.selectTime,
                  { backgroundColor: deliveryDate === item.name ? "black" : "white" },
                ]}
              >
                <Text
                  style={{
                    color: deliveryDate === item.name ? "white" : "black",
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>
      <BottomBar isPickup />
    </>
  );
};

export default PickupDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  labelText: {
    fontSize: 16,
    fontWeight: "500",
    margin: 10,
  },
  addressInput: {
    padding: 15,
    borderColor: "gray",
    borderWidth: 0.7,
    borderRadius: 9,
    marginHorizontal: 10,
  },
  scrollView: {
    marginHorizontal: 8,
  },
  pickupDate: {
    margin: 3,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  selectTime: {
    margin: 3,
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ececec",
  },
});
