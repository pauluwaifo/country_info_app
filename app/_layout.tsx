import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import "react-native-reanimated";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import NavBar from "@/components/Navbar";
import ApiProvider from "@/context/ApiProvider";
import ThemeProvider from "@/context/ThemeProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <ApiProvider>
            <NavBar />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="+not-found" />
              <Stack.Screen name="index" />
              <Stack.Screen name="details" />
            </Stack>
            <StatusBar style="auto" />
          </ApiProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.9)",
  },
});
