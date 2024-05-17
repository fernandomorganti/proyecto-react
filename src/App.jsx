import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/pages/item/ItemDetailContainer.jsx";
import Layout from "./components/layout/Layout.jsx";
import Cart from "./components/pages/cart/Cart.jsx";
import Checkout from "./components/pages/checkout/Checkout.jsx";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>Error Not Found 404</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
