import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";

import React from "react";

const CartWidget = () => {
  return (
    <div className="carrito">
      <Badge badgeContent={4} color="primary">
        <AddShoppingCartIcon fontSize="large" color="primary" />
      </Badge>
    </div>
  );
};

export default CartWidget;
