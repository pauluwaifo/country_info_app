import { createContext } from "react";
import { initialState } from "./ThemeProvider";

interface ThemeContextType {
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
}

export const ThemeContext = createContext<ThemeContextType>({
   state: initialState,
  dispatch: () => null,
});

  
