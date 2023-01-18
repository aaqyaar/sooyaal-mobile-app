import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost/php-training/api/login.php",
        {
          email,
          password,
        }
      );
      const data = await response.data;

      setAuth(data);

      await AsyncStorage.setItem("auth", JSON.stringify({ auth }));

      return auth;
    } catch (error) {
      return error;
    }
  };

  const resendCode = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost/php-training/api/resend-code.php",
        {
          email,
        }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return error;
    }
  };

  const verifyCode = async (email, code) => {
    try {
      const response = await axios.post(
        "http://localhost/php-training/api/verify-code.php",
        {
          email,
          code,
        }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return error;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost/php-training/api/register.php",
        {
          email,
          password,
        }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return error;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("auth");
      setAuth(null);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const getAuth = async () => {
      try {
        const auth = await AsyncStorage.getItem("auth");
        if (auth.user) {
          setAuth(JSON.parse(auth));
        }
      } catch (error) {
        throw error;
      }
    };
    getAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ auth, login, logout, resendCode, verifyCode, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
