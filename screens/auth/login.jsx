import { useState } from "react";

import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import useAuth from "../../hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../constants/fonts";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    if (email.length < 1 || password.length < 1) {
      return alert("Please enter your email and password");
    } else {
      try {
        const response = await login(email, password);
        if (response.data && response.data) {
          navigation.navigate("Home");
        } else {
          alert(response.message ? response.message : "An error occured");
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Sooyaal</Text>
      <Text style={styles.content}>
        Login with your email and password to access your account. If you don't
        have an account, you can create one by clicking the button below.
      </Text>

      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#a3a3a3"}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        passwordRules="required: lower; required: upper; required: digit; required: [-]; minlength: 8;"
        placeholderTextColor={"#a3a3a3"}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        style={{
          width: "80%",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text style={styles.forgotPasswordTxt}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: "#171717",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
          fontFamily: fonts.primary.regular,
        }}
      >
        Don't have an account?{" "}
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text
          style={{ color: "#171717", fontWeight: "bold", paddingVertical: 2 }}
        >
          Sign up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    fontFamily: fonts.primary.regular,
  },
  heading: {
    color: "#171717",
    fontSize: 50,
    fontFamily: fonts.primary.black,
  },
  content: {
    color: "#171717",
    fontSize: 15,
    textAlign: "center",
    width: "80%",
    marginTop: 10,
    fontFamily: fonts.primary.regular,
  },
  input: {
    backgroundColor: "transparent",
    width: "80%",
    borderColor: "#f5f5f0",
    borderWidth: 0.9,
    color: "#171717",
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    shadowColor: "#000",

    fontFamily: fonts.primary.regular,
  },

  forgotPasswordTxt: {
    color: "#171717",
    marginTop: 20,
    fontFamily: fonts.primary.regular,
  },

  button: {
    backgroundColor: "#262626",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 50,
    marginTop: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },

  buttonText: {
    color: "#f5f5f5",
    fontSize: 20,
    fontFamily: fonts.primary.regular,
  },
});
