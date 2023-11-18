import { createContext, Dispatch, SetStateAction } from "react";
export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface Carr {
  id: number;
  title: string;
  price: number;
  thumbnail?: string;
}

export interface Visible {
  visible: boolean;
}
export interface AppContextProps {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  carrItems: Carr[];
  setCarrItems: Dispatch<SetStateAction<Carr[]>>;
  carrVisible?: Visible;
  setCarrVisible: Dispatch<SetStateAction<Visible | undefined>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default AppContext;
