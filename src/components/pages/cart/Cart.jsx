import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <h1>No hay elementos en el carrito</h1>
      <Link to="/">FINALIZAR COMPRA</Link>
    </div>
  );
};

export default Cart;
