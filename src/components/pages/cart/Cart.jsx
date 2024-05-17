import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteById, total }) => {
  const clartCartAlert = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <h1>Este es el carrito</h1>

      {cart.map((product) => (
        <div key={product.id} style={{ border: "2px solid black" }}>
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <h5>{product.quantity}</h5>
          <button onClick={() => deleteById(product.id)}>Eliminar</button>
        </div>
      ))}
      <h2>El total a pagar es {total}</h2>

      <Button onClick={clartCartAlert} variant="outlined">
        Limpiar carrito
      </Button>

      {cart.length > 0 && (
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
