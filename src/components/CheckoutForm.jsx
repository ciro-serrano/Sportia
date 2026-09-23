import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, clearCart } = useContext(CartContext);

  const [error, setError] = useState(null);

  const totalCalculado = cart.reduce((acumulador, item) => {
    return acumulador + item.cantidad * item.price;
  }, 0);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const [ordenId, setOrdenId] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        comprador: formData,
        items: cart,
        total: totalCalculado,
        fecha: new Date(),
      });
      setOrdenId(docRef.id);
    } catch (e) {
      setError(`Error al confirmar compra , detalles : ${e.message}`);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const volverInicio = () => {
    clearCart();
    navigate("/");
  };
  if (error) return <p>{error}</p>;

  return (
    <div>
      {ordenId ? (
        <>
          <p>Compra realizada con exito , Id de la Orden : {ordenId}</p>
          <button onClick={volverInicio}>Volver al inicio</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} name="nombre" />
          <input type="email" onChange={handleChange} name="email" />
          <input type="number" onChange={handleChange} name="telefono" />
          <button type="submit">Confirmar Compra</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
