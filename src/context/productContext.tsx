import React, { createContext, useContext, useEffect, useReducer } from "react";
import { addType, stateType, updateType } from "./index";
import { reducer } from "./reducer";

type childrenType = {
  children: React.ReactNode;
};
type actionType = updateType | addType;

const initialState = {
  products: [],
  buyProducts: [],
};

const StateContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<actionType>;
}>({ state: initialState, dispatch: () => {} });

export const StateContextProvider = ({ children }: childrenType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const productFetch = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    dispatch({ type: "GET_Products", payload: data });
  };

  useEffect(() => {
    productFetch();
  }, []);
  const data = { state, dispatch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const useContextCustom = () => useContext(StateContext);
