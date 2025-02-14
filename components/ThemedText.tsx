import React from "react";
import { Text, type TextProps } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

type ThemedTextProps = TextProps & {
  [key: string]: any;
  style?: any
};

const ThemedText: React.FC<ThemedTextProps> = ({ style, ...Props }) => {
  const { state } = useContext(ThemeContext);
  const { lightMode } = state;
  const color = lightMode ? "black" : "white";
  return <Text style={[style, { color: color }]} {...Props} />;
};

export default ThemedText;
