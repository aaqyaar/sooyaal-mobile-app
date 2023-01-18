import { useState } from "react";

import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useAuth from "../../hooks/useAuth";

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
    <View style={styles.container}>
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
        placeholderTextColor={"#171717"}
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
        placeholderTextColor={"#171717"}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Text
        style={{
          color: "#171717",
          marginTop: 20,
          //   justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        Forgot your password?
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: "#f5f5f5", fontSize: 20 }}>Login</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: "#171717",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#171717",
    fontSize: 30,
    fontWeight: "900",
  },
  content: {
    color: "#171717",
    fontSize: 15,
    textAlign: "center",
    width: "80%",
    marginTop: 20,
  },
  input: {
    backgroundColor: "transparent",
    width: "80%",
    borderColor: "#171717",
    borderWidth: 1,
    color: "#171717",
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    shadowColor: "#000",
  },

  button: {
    backgroundColor: "#262626",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,
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
});
