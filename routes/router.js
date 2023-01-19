import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  VerifyCodeScreen,
} from "../screens";
import { fonts } from "../constants/fonts";

const Stack = createNativeStackNavigator();

export default function Router() {
  const isAuth = false;
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={isAuth ? "Home" : "Login"}
        initialRouteName="Login"
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
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerShadowVisible: true,
            headerTitle: "Forgot Password",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: fonts.primary.bold,
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShadowVisible: true,
            headerTitle: "Create Account",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: fonts.primary.bold,
            },
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
