// App.tsx

import React from "react";
import AppProvider from "./Context/AppProvider";
import Products from "./Components/Products/Products";
import Header from "./Components/Header";

const App: React.FC = () => {
  const providerProps = {
    id: 1,
    title: "Seu Título",
    price: 9.99,
    children: <Products />,
  };

  return (
    <AppProvider {...providerProps}>
      <Header />
      <Products />
    </AppProvider>
  );
};

export default App;
