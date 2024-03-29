import Navbar from "./components/layout/navbar/Navbar.jsx";
import ItemsListContainer from "./components/pages/itemsListContainer/ItemsListContainer.jsx";
import Footer from "./components/layout/footer/Footer.jsx";

function App() {
  return (
    <div className="contenedor">
      <Navbar />
      <ItemsListContainer />
      <Footer />
    </div>
  );
}

export default App;
