import { createContext } from "react";
import { initialState } from "./ApiProvider";

interface ApiContextType {
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setActivateFilter: React.Dispatch<React.SetStateAction<boolean>>;
  activateFilter: boolean;
}

export const ApiContext = createContext<ApiContextType>({
  state: initialState,
  dispatch: () => undefined,
  search: "",
  setSearch: () => undefined,
  setActivateFilter: () => undefined,
  activateFilter: false,
});
