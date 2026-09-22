import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalUnidades = cart.reduce((acumulador, item) => {
    return acumulador + item.cantidad;
  }, 0);

  return (
    <div>
      <Link to={"/cart"}>
        <Badge badgeContent={totalUnidades} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
