import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="carrito">
        <Badge badgeContent={0} showZero color="primary">
          <AddShoppingCartIcon fontSize="large" />
        </Badge>
      </div>
    </Link>
  );
};

export default CartWidget;
