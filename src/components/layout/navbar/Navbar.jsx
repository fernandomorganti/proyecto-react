import { Box, Button } from "@mui/material";
import CartWidget from "../cart/CartWidget";

const Navbar = () => {
  return (
    <Box className="contenedor-Navbar">
      <div>
        <h1>Panes</h1>
        <img
          src="https://www.bimbo.com.ar/sites/all/themes/custom/bimbo/img/mainlogo.png"
          alt="Logo"
        />
      </div>
      <div className="menu">
        <Button variant="contained" sx={{ margin: "20px" }}>
          Artesano
        </Button>
        <Button variant="contained" sx={{ margin: "20px" }}>
          Panes
        </Button>
        <Button variant="contained" sx={{ margin: "20px" }}>
          Dulces
        </Button>
        <Button variant="contained" sx={{ margin: "20px" }}>
          Rapiditas
        </Button>
      </div>
      <CartWidget />
    </Box>
  );
};

export default Navbar;
