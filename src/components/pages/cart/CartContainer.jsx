import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const CartContainer = () => {
  return (
    <Link to="/cart">
      <div className="carrito">
        <Badge badgeContent={0} color="secondary">
          <AddShoppingCartIcon fontSize="large" color="secondary" />
        </Badge>
      </div>
    </Link>
  );
};

export default CartContainer;
