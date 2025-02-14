import React from "react";
import { View, type ViewProps } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type ThemedViewProps = ViewProps & {
  [key: string]: any;
  style?: any;
};

const ThemedView: React.FC<ThemedViewProps> = ({ style, ...Props }) => {
  const { state } = useContext(ThemeContext);
  const { lightMode } = state;
  const backgroundColor = lightMode ? "white" : "#030f25";
  return (
    <View style={[style, { backgroundColor: backgroundColor, }]} {...Props} />
  );
};

export default ThemedView;
