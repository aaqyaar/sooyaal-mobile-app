import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, LoginScreen, VerifyCodeScreen } from "../screens";

const Stack = createNativeStackNavigator();

export default function Router() {
  const isAuth = false;
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={isAuth ? "Home" : "Login"}
        initialRouteName="VerifyCode"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VerifyCode"
          component={VerifyCodeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
