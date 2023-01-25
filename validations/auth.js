import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .email("Invalid email")
    .required("Email or phone number is required"),
  password: Yup.string().min(8).max(30).required("Password is required"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(30, "Too Long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Password confirmation is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  photoURL: Yup.string().nullable(),
});
