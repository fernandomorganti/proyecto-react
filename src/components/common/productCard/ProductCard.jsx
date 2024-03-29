const ProductCard = (props) => {
  const { imagen, titulo, descripcion, precio } = props;
  return (
    <div className="card">
      <h2>{imagen}</h2>
      <h3>{titulo}</h3>
      <h4>{descripcion}</h4>
      <h5>{precio}</h5>
    </div>
  );
};

export default ProductCard;
