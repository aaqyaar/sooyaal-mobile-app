import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerifyCodeScreen() {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);

  const inputsRefs = Array(6).fill(React.createRef());

  const handleChange = (text, index) => {
    const newInputs = [...inputs];
    newInputs[index] = text;
    setInputs(newInputs);
  };
  const handleSubmit = (index) => {
    if (index < 5 && !inputs[index + 1]) {
      inputsRefs[index + 1].focus();
    } else {
      for (let i = 0; i < 6; i++) {
        if (!inputs[i]) {
          inputsRefs[i].focus();
          break;
        }
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#171717",
          paddingVertical: 10,
        }}
      >
        Verify Code
      </Text>
      <Text>Enter the code sent to your email</Text>
      <Text>abdizamedmo@gmail.com</Text>
      <Text>Didn't receive the code?</Text>
      <TouchableOpacity
        style={{
          marginTop: 5,
        }}
      >
        <Text>Resend Code</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {inputs.map((input, index) => (
          <TextInput
            ref={(input) => {
              inputsRefs[index] = input;
            }}
            key={index}
            style={styles.input}
            maxLength={1}
            keyboardType="number-pad"
            value={input}
            onChangeText={(text) => {
              handleChange(text, index);
            }}
            onSubmitEditing={() => handleSubmit(index)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#171717",
          padding: 10,
          borderRadius: 5,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#f5f5f5",
          }}
        >
          Verify Code
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 40,
    margin: 5,
    textAlign: "center",
    // marginHorizontal: 10,
  },
});
