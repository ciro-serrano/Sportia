import ItemList from "./ItemList";
import mockProducts from "../services/mockProducts";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setItems(mockProducts);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;
