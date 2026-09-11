import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 900,
        margin: "40px auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: 2,
        gap: 3,
      }}
    >
      <CardMedia
        component="img"
        image={product.img}
        alt={product.name}
        sx={{
          width: { xs: "100%", md: 400 },
          height: 400,
          objectFit: "cover",
          borderRadius: 2,
        }}
      />

      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>

        <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
          ${product.price}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Chip label={`Categoría: ${product.category}`} sx={{ mr: 1 }} />

          <Chip
            label={`Stock: ${product.stock}`}
            color={product.stock > 0 ? "success" : "error"}
          />
        </Box>
        <ItemCount
          stock={product.stock}
          onAdd={(cantidad) =>
            console.log(`Agregando ${cantidad} de ${product.name}`)
          }
        />
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
