//componente card

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Item = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image={product.img}
        alt={product.name}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          ${product.price}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {product.category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Item;
