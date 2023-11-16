// AppProvider.tsx

import React, { useState, ReactNode } from "react";
import AppContext, { AppContextProps, Product } from "./AppContext";

interface ProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const value: AppContextProps = { products, setProducts };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
