import {
  Button,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import useAuth from "../../hooks/useAuth";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../constants/fonts";
import { Link } from "@react-navigation/native";
import { Formik } from "formik";
import { loginSchema } from "../../validations/auth";
import { styles } from "./styles";
import { useRef } from "react";
import Toast from "react-native-toast-message";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();
  const passwordRef = useRef();
  const onSubmit = async (email, password) => {
    try {
      await login(email, password);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Logged in successfully",
        visibilityTime: 4000,
        autoHide: true,
      });

      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: error
          ? error.message
            ? error.message
            : error
          : "Something went wrong",
        visibilityTime: 4000,
        autoHide: true,
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ emailOrPhone: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values) => onSubmit(values.emailOrPhone, values.password)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.heading}>Sooyaal</Text>
            <TextInput
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.input,
                errors.emailOrPhone &&
                  touched.emailOrPhone && {
                    borderColor: "red",
                    borderWidth: 0.2,
                  },
                { position: "relative" },
              ]}
              placeholder="Email or Phone Number"
              placeholderTextColor={"#a3a3a3"}
              value={values.email}
              onChangeText={handleChange("emailOrPhone")}
              onBlur={handleBlur("emailOrPhone")}
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
            />

            <TextInput
              ref={passwordRef}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.input,
                errors.password &&
                  touched.password && { borderColor: "red", borderWidth: 0.2 },
              ]}
              placeholder="Password"
              secureTextEntry={true}
              passwordRules="required: lower; required: upper; required: digit; required: [-]; minlength: 8;"
              placeholderTextColor={"#a3a3a3"}
              maxLength={30}
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />

            <View
              style={{
                width: "80%",
                justifyContent: "flex-end",
                flexDirection: "row",
                marginVertical: 10,
              }}
            >
              <Link to={"/ForgotPassword"}>
                <Text style={styles.forgotPasswordTxt}>
                  Forgot your password?
                </Text>
              </Link>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
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
            <Link to={"/Register"}>
              <Text
                style={{
                  color: "#171717",
                  fontWeight: "bold",
                  paddingVertical: 2,
                  fontSize: 15,
                }}
              >
                Sign up
              </Text>
            </Link>
          </View>
        )}
      </Formik>

      <Toast position="bottom" bottomOffset={30} />
    </SafeAreaView>
  );
}
