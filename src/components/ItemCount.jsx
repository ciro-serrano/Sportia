import { useState } from "react";
import { Button } from "@mui/material";

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  //solo modifca estado
  const agregarItem = () => {
    setCantidad((prev) => prev + 1);
  };
  //solo modifca estado
  const quitarItem = () => {
    setCantidad((prev) => prev - 1);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={agregarItem}
        disabled={cantidad === stock || stock === 0}
      >
        +
      </Button>

      <Button
        variant="contained"
        color="secondary"
        onClick={quitarItem}
        disabled={cantidad === 1 || stock === 0}
      >
        -
      </Button>

      <p>{cantidad}</p>

      <Button
        variant="contained"
        disabled={stock === 0}
        color="success"
        onClick={() => onAdd(cantidad)}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
