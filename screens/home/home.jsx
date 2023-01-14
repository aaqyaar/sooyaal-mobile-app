import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
