import React, { useRef, useEffect, useContext } from "react";
import { StyleSheet, View, Animated } from "react-native";
import ThemedView from "./ThemedView";
import Icon from "react-native-vector-icons/Feather";
import { ThemeContext } from "@/context/ThemeContext";

const LoadingScreen: React.FC = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const { state } = useContext(ThemeContext);
  const { lightMode } = state;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <ThemedView style={[styles.container]}>
      <View style={styles.loaderContainer}>
        <Icon name="globe" size={40} color={lightMode ? "black" : "white"} />
        <Animated.View
          style={[
            styles.loader,
            {
              transform: [{ rotate: spin }],
              borderColor: lightMode ? "black" : "white",
            },
          ]}
        ></Animated.View>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
    position: "relative",
  },
  loader: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 60,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 30,
    position: "absolute",
  },
});

export default LoadingScreen;
