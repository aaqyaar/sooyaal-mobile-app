import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function ForgotPasswordScreen() {
  const [showPassword, setShowPassword] = useState(false);
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
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Forgot Password</Text>
      <Text style={styles.content}>
        Enter your email address and we will send you a link to reset your
        password via email. If you don't have an account, you can create one by
        clicking the button below.
      </Text>
      <TextInput
        autoCapitalize={false}
        autoCorrect={false}
        autoCompleteType="email"
        style={styles.input}
        placeholder="Email Address - example@gmail.com)"
        placeholderTextColor={"#a3a3a3"}
      />

      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        {inputs.map((input, index) => (
          <TextInput
            ref={(input) => {
              inputsRefs[index] = input;
            }}
            key={index}
            style={styles.codeInput}
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

      <View
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          autoCapitalize={false}
          autoCorrect={false}
          autoCompleteType="password"
          keyboardType="visible-password"
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor={"#a3a3a3"}
          secureTextEntry={!showPassword}
          maxLength={30}
        />

        {PasswordVisibilityHandler(showPassword, handleShowPassword)}
      </View>

      <View
        style={{
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          autoCapitalize={false}
          autoCorrect={false}
          autoCompleteType="password"
          keyboardType="visible-password"
          style={styles.input}
          placeholder="Retype new Password"
          placeholderTextColor={"#a3a3a3"}
          secureTextEntry={!showPassword}
          maxLength={30}
        />

        {PasswordVisibilityHandler(showPassword, handleShowPassword)}
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const PasswordVisibilityHandler = (showPassword, onShowPassword) => {
  if (!showPassword) {
    return (
      <Feather
        onPress={onShowPassword}
        name="eye"
        size={15}
        color="black"
        style={{
          position: "absolute",
          right: 15,
          top: 12.5,
        }}
      />
    );
  } else {
    return (
      <Feather
        onPress={onShowPassword}
        name="eye-off"
        size={15}
        color="black"
        style={{
          position: "absolute",
          right: 15,
          top: 12.5,
        }}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#171717",
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 10,
  },
  content: {
    color: "#171717",
    fontSize: 15,
    fontWeight: "300",
    textAlign: "center",
    maxWidth: "80%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "transparent",
    width: "80%",
    height: 40,
    borderColor: "#f5f5f5",
    borderWidth: 1,
    color: "#171717",
    marginBottom: 10,
    padding: 10,
    shadowColor: "#000",
  },
  codeInput: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 40,
    margin: 7,
    textAlign: "center",
    // marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#262626",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    marginBottom: 50,
  },
  buttonText: {
    color: "#f5f5f5",
    fontSize: 20,
    fontWeight: "500",
  },
});
