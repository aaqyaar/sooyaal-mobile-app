import { StatusBar } from "expo-status-bar";
import { ToggleMode } from "./components";
import Router from "./routes/router";

export default function App() {
  return (
    <>
      <Router />
      <ToggleMode />
      <StatusBar style="auto" />
    </>
  );
}
