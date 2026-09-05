import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<h2>Detalle de producto</h2>} />
        <Route path="/cart" element={<h2>Carrito</h2>} />
      </Routes>
    </div>
  );
};

export default App;
