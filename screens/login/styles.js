import { StyleSheet } from "react-native";
import { fonts } from "../../constants/fonts";

export const styles = StyleSheet.create({
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
    shadowColor: "#171717",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
  },
  outlinedButton: {
    backgroundColor: "transparent",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 50,
    marginTop: 2,
    padding: 10,
    shadowColor: "#f4f4f4",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 4,
  },

  buttonText: {
    color: "#f5f5f5",
    fontSize: 20,
    fontFamily: fonts.primary.regular,
  },
});
