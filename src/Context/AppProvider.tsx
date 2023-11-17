// AppProvider.tsx

import React, { useState, ReactNode } from "react";
import AppContext, { AppContextProps, Product, Carr } from "./AppContext";

interface ProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [carrItems, setCarrItems] = useState<Carr[]>([]);

  const value: AppContextProps = {
    products,
    setProducts,
    carrItems,
    setCarrItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
