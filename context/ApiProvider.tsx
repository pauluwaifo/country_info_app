import React, { useEffect, useReducer, useState } from "react";
import { ApiContext } from "./ApiContext";
import { getAllCountries } from "@/api/Api";

export const initialState = {
  countries: [],
  loading: true,
  error: false,
  errorMessage: null,
};

const apiReducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        loading: false,
        error: false,
      };
    case "ERROR":
      return {
        ...state,
        errorMessage: action.payload,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);
  const [search, setSearch] = useState<string>("")
  const [activateFilter, setActivateFilter] = useState<boolean>(false)
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await getAllCountries();
      if (response) {
        dispatch({ type: "GET_COUNTRIES", payload: response.data});
      }
      else {
        dispatch({ type: "ERROR", payload: `Error fetching data ${response}` });
      }
    };

    fetchCountries();
  }, []);
  return (
    <ApiContext.Provider value={{ state, dispatch, setSearch, search, setActivateFilter, activateFilter }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
