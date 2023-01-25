import React, { useState } from "react";
import { registerSchema } from "../../validations/auth";
import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

import { fonts } from "../../constants/fonts";
import { EvilIcons } from "@expo/vector-icons";
import { PasswordVisibilityHandler } from "../../components";

export default function RegisterForm() {
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onPickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }

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

  return (
    <Formik initialValues={initialFormValues} validationSchema={registerSchema}>
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        return (
          <>
            <Text style={styles.label}>Photo (optional)</Text>
            <View
              style={{
                paddingLeft: 10,
                paddingVertical: 10,

                marginBottom: 10,
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  onPickImage();
                  values.photoURL = image;
                }}
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
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name *</Text>
              <TextInput
                numberOfLines={1}
                autoCapitalize="words"
                autoCorrect={false}
                autoCompleteType="name"
                keyboardType="default"
                style={styles.input}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
              <Text style={styles.label}>Email *</Text>
              <TextInput
                numberOfLines={1}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
                autoCompleteType="email"
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <Text style={styles.label}>Phone Number *</Text>
              <TextInput
                numberOfLines={1}
                keyboardType="phone-pad"
                style={styles.input}
                value={values.phone}
                maxLength={16}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
              />
              {errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
              <Text style={styles.label}>Password *</Text>
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
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
                {PasswordVisibilityHandler(showPassword, handleShowPassword)}
              </View>

              <Text style={styles.label}>Confirm Password *</Text>
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
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}

                {PasswordVisibilityHandler(showPassword, handleShowPassword)}

                <Text
                  style={[
                    styles.label,
                    {
                      marginBottom: 10,
                    },
                  ]}
                >
                  {/* password description utilities */}
                  <Text style={{ color: "#3f3f46", fontWeight: "bold" }}>
                    Password must be at least 8 and maximum 30
                  </Text>
                  <Text> characters long</Text>
                  <Text style={{ color: "#3f3f46", fontWeight: "bold" }}>
                    {" "}
                    and contain at least one
                  </Text>
                  <Text>
                    {" "}
                    uppercase letter, one lowercase letter, one number and one
                  </Text>
                  <Text style={{ color: "#3f3f46", fontWeight: "bold" }}>
                    {" "}
                    special character
                  </Text>
                </Text>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                activeOpacity={0.9}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </>
        );
      }}
    </Formik>
  );
}

const initialFormValues = {
  name: "",
  email: "",
  phone: "+252 ",
  password: "",
  confirmPassword: "",

  photoURL: "",
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 0,
  },

  label: {
    color: "#171717",
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 2,
    fontFamily: fonts.primary.regular,
  },
  input: {
    marginTop: -5,
    height: 40,
    margin: 12,
    borderBottomWidth: 0.3,
    borderColor: "#171717",
    borderRadius: 2,

    fontFamily: fonts.primary.regular,
  },

  errorText: {
    color: "red",
    fontSize: 13,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: -6,
    fontFamily: fonts.primary.regular,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  btnContainer: {
    width: "100%",
    height: 50,
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#171717",
    padding: 15,
    borderRadius: 55,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",

    fontFamily: fonts.primary.bold,
  },
});
