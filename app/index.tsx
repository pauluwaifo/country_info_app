import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet } from "react-native";

import Countries from "@/components/countries";
import ThemedView from "@/components/ThemedView";
import { ThemeContext } from "@/context/ThemeContext";
export default function HomeScreen() {

  return (
    <ThemedView style={styles.container}>
      <StatusBar style="dark" />
      <Countries />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
