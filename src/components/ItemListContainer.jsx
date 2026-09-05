import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//firestore
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../services/firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const q = categoryId
          ? query(
              collection(db, "products"),
              where("category", "==", categoryId),
            )
          : query(collection(db, "products"));
        const querySnapshot = await getDocs(q);
        setItems(querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [categoryId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <ItemList products={items} />
    </div>
  );
};

export default ItemListContainer;
