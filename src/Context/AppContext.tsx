import { createContext } from "react";

interface AppContextProps {
  name: string;
  setName: (name: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default AppContext;
