import { ScrollView, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisterForm from "./register-form";

export default function RegisterScreen() {
  //

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          padding: 0,
          height: Dimensions.get("window").height,
        }}
        showsVerticalScrollIndicator
      >
        <RegisterForm />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
});
