import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const App = () => {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "white" }}
    >
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : "The button isn't pressed yet"}
      </Text>
      <Button
        title="Press me"
        onPress={() => setPressedCount(pressedCount + 1)}
        disabled={pressedCount >= 3}
      />
      <Button title="Reset count" onPress={() => setPressedCount(0)} />
    </View>
  );
};

export default App;
