import CounterPresentacional from "./CounterPresentacional";

const CounterContainer = () => {
  const [contador, setContador] = useState(1);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("no podes menos de 1");
    }
  };
  return (
    <CounterPresentacional sumar={sumar} restar={restar} contador={contador} />
  );
};

export default CounterContainer;
