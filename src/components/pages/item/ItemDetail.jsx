import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <div className="col-md-4 offset-md-4">
        <img src={item.img} className="img-fluid" alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>$ {item.price}</p>
        <p>Cantidad: {item.stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
