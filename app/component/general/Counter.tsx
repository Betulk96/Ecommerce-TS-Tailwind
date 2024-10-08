import { CardProductProps } from "../detail/DetailClient";
// TypeScript'in interface özelliği, Counter bileşeninin alması gereken propsları tanımlamak için kullanılıyor. 
interface CounterProps {
    cardProduct : CardProductProps,
    increaseFunc: () =>  void;// increaseFuncdışaırdan bir parametre almıyor void ile
    decreaseFunc: () =>  void;
}
//bu class stok sayısını artırır ve azaltır.
const Counter:React.FC<CounterProps> = ({cardProduct, increaseFunc, decreaseFunc}) => {

    const buttonStyle = "w-8 h-8 border flex items-center justify-center text-lg rounded-md"
  return (
    <div className="flex items-center gap-2">
        <div className={buttonStyle} onClick={decreaseFunc}>-</div>
        <div className="text-lg md:text-xl">{cardProduct?.quantity}</div>
        <div className={buttonStyle} onClick={increaseFunc}>+</div>
    </div>
  )
}

export default Counter