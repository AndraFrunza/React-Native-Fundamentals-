import React, { useState } from "react"; //hook folosit pentru gestionarea starii unei componente
import { Button, Text, View } from "react-native";

const App = () => {
  const [pressedCount, setPressedCount] = useState(0);     //const [state (var), setState (function)] = useState(initialValue);
  const [text, setText] = useState('Buna ziua!');

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

      <Text style={{ margin: 16 }}>
        {text === 'Buna ziua!'
          ? `The text has changed to ${text} name.`
          : `The text has changed to ${text} name.`}
      </Text>
      <Button
        title="Change my name"
        onPress={() => setText('La revedere!')}
      />
      <Button title="Reset count" onPress={() => setText('Buna ziua!')} />
    </View>
  );
};

export default App;
