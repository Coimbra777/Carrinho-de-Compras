// AppContext.tsx

import { createContext, Dispatch, SetStateAction } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface AppContextProps {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default AppContext;
