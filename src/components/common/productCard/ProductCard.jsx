import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ title, description, price, img, id }) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia sx={{ height: 250 }} image={img} title="green iguana" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {price} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/item/${id}`}>
          <Button size="small">Ver detalle</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
