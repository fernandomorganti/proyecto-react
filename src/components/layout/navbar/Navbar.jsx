import CartWidget from "../../pages/cart/cartWidget/CartWidget.jsx";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <>
        <div className="menu">
          <Link to="/">
            <img
              src="https://www.bimbo.com.ar/sites/all/themes/custom/bimbo/img/mainlogo.png"
              alt="Logo"
            />
          </Link>
          <ul className="categorias">
            <Link to="/">PANES</Link>
            <Link to="/category/salado">SALADOS</Link>
            <Link to="/category/dulce">DULCES</Link>
            <Link to="/category/rapiditas">RAPIDITAS</Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};

export default Navbar;
