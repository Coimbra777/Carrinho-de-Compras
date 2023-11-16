import React, { useState, ReactNode } from "react";
import AppContext from "./AppContext";

interface ProviderProps {
  children: ReactNode;
  name: string;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [name, setName] = useState("acabjaka");
  const value = {
    name,
    setName,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Provider;
