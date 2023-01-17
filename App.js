import { StatusBar } from "expo-status-bar";
import { ToggleMode } from "./components";
import { AuthProvider } from "./contexts/auth-context";
import Router from "./routes/router";

export default function App() {
  return (
    <AuthProvider>
      <Router />
      <ToggleMode />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
