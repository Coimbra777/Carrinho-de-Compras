import "./App.css";
import Header from "./Components/Header";
import Products from "./Components/Products/Products";
import AppProvider from "./Context/AppProvider";

const App: React.FC = () => {
  return (
    <AppProvider name="name">
      <Header />
      <Products />
    </AppProvider>
  );
};

export default App;
