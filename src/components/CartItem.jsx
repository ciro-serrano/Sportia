import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100"
        image={item.img}
        alt={item.name}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ${item.price} Cantidad x {item.cantidad}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {item.category}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          Subtotal : ${item.price * item.cantidad}
        </Typography>
        <Link to={`/item/${item.id}`}>
          <Button>Volver al producto</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CartItem;
