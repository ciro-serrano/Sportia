import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cart = () => {
  const { cart } = useContext(CartContext);
  if (cart.length === 0) return <p>Tu carrito esta vacio</p>;
  const total = cart.reduce((acumulador, item) => {
    return acumulador + item.cantidad * item.price;
  }, 0);

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Typography>TOTAL : ${total}</Typography>
      <Link to={"/checkout"}>
        <Button> Ir a pagar </Button>
      </Link>
    </div>
  );
};

export default Cart;
