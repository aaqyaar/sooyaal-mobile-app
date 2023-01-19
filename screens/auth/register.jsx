import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../constants/fonts";

export default function RegisterScreen() {
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("+252 ");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted")
      return alert("You need to enable permission to access the library.");
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleChangePhone = (text) => {
    if (text.length === 0) {
      setPhone("+252 ");
    } else if (text.length === 4) {
      setPhone(text + " ");
    } else if (text.length === 8) {
      setPhone(text + " ");
    } else if (text.length === 12) {
      setPhone(text + " ");
    } else {
      setPhone(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          numberOfLines={1}
          autoCapitalize="words"
          autoCorrect={false}
          autoCompleteType="name"
          keyboardType="default"
          style={styles.input}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          numberOfLines={1}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          autoCompleteType="email"
          style={styles.input}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          numberOfLines={1}
          keyboardType="phone-pad"
          style={styles.input}
          value={phone}
          maxLength={15}
          onChangeText={(text) => handleChangePhone(text)}
        />
        <Text style={styles.label}>Password</Text>
        <View
          style={{
            position: "relative",
          }}
        >
          <TextInput
            numberOfLines={1}
            autoCapitalize="none"
            keyboardType="default"
            style={styles.input}
            secureTextEntry={!showPassword}
            maxLength={30}
          />
          {PasswordVisibilityHandler(showPassword, handleShowPassword)}
        </View>

        <Text style={styles.label}>Confirm Password</Text>
        <View
          style={{
            position: "relative",
          }}
        >
          <TextInput
            numberOfLines={1}
            autoCapitalize="none"
            keyboardType="default"
            style={styles.input}
            secureTextEntry={!showPassword}
            maxLength={30}
          />

          {PasswordVisibilityHandler(showPassword, handleShowPassword)}
        </View>
        <Text style={styles.label}>Photo</Text>
        <View
          style={{
            paddingLeft: 10,
            paddingVertical: 10,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={pickImage}
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#f5f5f5",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EvilIcons name="camera" size={24} color="black" />
          </TouchableOpacity>

          {image && (
            <View
              style={{
                width: 100,
                height: 100,
                marginLeft: 5,

                backgroundColor: "#f5f5f5",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          )}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
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
          right: 20,
          top: 25,
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
          right: 20,
          top: 25,
        }}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    padding: 10,
  },

  inputContainer: {
    marginTop: 0,
  },

  label: {
    color: "#171717",
    fontSize: 15,
    fontWeight: "lighter",
    marginLeft: 10,

    fontFamily: fonts.primary.regular,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 0.3,
    borderColor: "#171717",
    padding: 10,
    borderRadius: 2,

    fontFamily: fonts.primary.regular,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  btnContainer: {
    marginTop: 10,
    width: "96%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: "#171717",
    padding: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
