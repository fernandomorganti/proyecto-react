import "./ItemDetail.css";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div>
      <div className={"ContainerItemDetail"}>
        <div className={"containerImage"}>
          <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
          <h2>
            <span>Producto:</span> {item.title}
          </h2>
          <h2>
            <span>Descripcion:</span> {item.description}
          </h2>
          <h2>
            <span>Precio:</span> ${item.price}.-
          </h2>
        </div>
      </div>
      <CounterContainer stock={item.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
