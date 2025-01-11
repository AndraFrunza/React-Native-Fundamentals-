import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

//const image = {uri: 'https://example.com/cool-image.jpg'};
const image = require("./react-native.jpg"); //faster than uri attribute if we have a lower internet connection

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text>
      <Text>My name is Andra</Text>
      <Text>This is my first React Native App</Text>

      <Text style={{ fontSize: 16 }}>The 
        <Text style={{ fontWeight: 'bold' }}>quick brown fox</Text> 
        jumps over the lazy dog
      </Text>

      <Image source={image} style={{ width: 100, height: 100 }}/>

      <StatusBar style="auto" /> */}

      <Text style={{ fontSize: 24, textAlign: "center" }}>Scroll me!</Text>
      <View style={{ height: 400, backgroundColor: "#e5e5e5" }}>
        <ScrollView
          style={{ width: 300, height: 300, backgroundColor: "red" }}
        />
        <ScrollView
          style={{ width: 300, height: 300, backgroundColor: "green" }}
        />
        <ScrollView
          style={{ width: 300, height: 300, backgroundColor: "blue" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
