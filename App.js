import { StatusBar } from "expo-status-bar";
// import { ToggleMode } from "./components";
import { AuthProvider } from "./contexts/auth-context";
import { CustomFontsProvider } from "./contexts/custom-fonts";
import Router from "./routes/router";

export default function App() {
  return (
    <CustomFontsProvider>
      <AuthProvider>
        <Router />
        {/* <ToggleMode /> */}
        <StatusBar style="auto" />
      </AuthProvider>
    </CustomFontsProvider>
  );
}
