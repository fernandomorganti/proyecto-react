import ProductCard from "../../common/productCard/ProductCard";
const ItemsListContainer = () => {
  return (
    <div className="productos">
      <ProductCard
        imagen={<img src="./src/assets/images/burguer.jpg" alt="burguer" />}
        titulo={"HAMBURGUESAS"}
        precio={"$300"}
        descripcion={"por 4 unidades"}
      />
      <ProductCard
        imagen={<img src="./src/assets/images/pancho.jpeg" alt="pancho" />}
        titulo={"PANCHOS"}
        precio={"$200"}
        descripcion={"por 6 unidades"}
      />
      <ProductCard
        imagen={<img src="./src/assets/images/lactal.jpg" alt="Lactal" />}
        titulo={"LACTAL"}
        precio={"$500"}
        descripcion={"Rebanado grueso"}
      />
    </div>
  );
};

export default ItemsListContainer;
