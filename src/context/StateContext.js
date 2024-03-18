import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const stateContext = createContext();
export const useStateContext = () => useContext(stateContext);

export const StateContext = ({ children }) => {
  const [open, setOpen] = useState(0);
  const values = {
    open,
    setOpen,
  };
  return (
    <stateContext.Provider value={values}>{children}</stateContext.Provider>
  );
};
