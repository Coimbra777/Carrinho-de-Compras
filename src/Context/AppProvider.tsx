// AppProvider.tsx
import React, { useState, ReactNode } from "react";
import AppContext, {
  AppContextProps,
  Product,
  Carr,
  Visible,
} from "./AppContext";

interface ProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [carrItems, setCarrItems] = useState<Carr[]>([]);
  const [carrVisible, setCarrVisible] = useState<Visible | undefined>(
    undefined
  );

  const value: AppContextProps = {
    products,
    setProducts,
    carrItems,
    setCarrItems,
    carrVisible,
    setCarrVisible,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
