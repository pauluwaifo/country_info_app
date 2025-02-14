import React from "react";
import { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";

export const initialState = {
  lightMode: false,
  darkMode: true,
};


export const themeReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newState = {
        ...state,
        lightMode: !state.lightMode,
        darkMode: !state.darkMode,
      };
      console.log("New state after TOGGLE_THEME:", newState);
      return newState;
    default:
      return state;
  }
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
