import { Feather } from "@expo/vector-icons";

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
          top: 10,
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
          top: 10,
        }}
      />
    );
  }
};

export default PasswordVisibilityHandler;
