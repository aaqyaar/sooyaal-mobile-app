import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IonIons from "@expo/vector-icons/Ionicons";

export default function ToggleMode() {
  const [mode, setMode] = React.useState("light");

  return (
    <View style={{ position: "absolute", top: 60, right: 15, bottom: 2 }}>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          backgroundColor: "#171717",
          // borderColor: "#f5f5f5",

          // padding: 10,
          borderRadius: 5,

          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => setMode(mode === "light" ? "dark" : "light")}
      >
        {mode === "light" ? (
          <IonIons name="moon" size={20} color="#f5f5f5" />
        ) : (
          <IonIons name="sunny" size={20} color="#f5f5f5" />
        )}
      </TouchableOpacity>
    </View>
  );
}
