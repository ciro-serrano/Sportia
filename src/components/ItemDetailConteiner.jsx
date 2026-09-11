import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

//firebase
import { getDoc, doc } from "firebase/firestore";
import db from "../services/firebaseConfig";

const ItemDetailConteiner = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //parametro
  const { itemId } = useParams();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "products", itemId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const producto = { id: docSnap.id, ...docSnap.data() };
          setItem(producto);
        } else {
          setError(new Error(" producto no encontrado"));
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [itemId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <div>
      <ItemDetail product={item} />
    </div>
  );
};

export default ItemDetailConteiner;
