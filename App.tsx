import { StatusBar } from "expo-status-bar";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { Home } from "./src/screens/Home";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

import { ThemeProvider } from "styled-components/native";

import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  );
}
