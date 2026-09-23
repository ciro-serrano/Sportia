import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailConteiner />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
