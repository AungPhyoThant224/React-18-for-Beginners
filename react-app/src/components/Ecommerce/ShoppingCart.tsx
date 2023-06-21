interface Props {
  products: String[];
  onHandleClick: () => void;
}

const ShoppingCart = ({ products, onHandleClick }: Props) => {
  return (
    <>
      <div>ShoppingCart</div>
      <ul>
        {products.map((product) => (
          <li>{product}</li>
        ))}
      </ul>
      <button onClick={onHandleClick}>Clear</button>
    </>
  );
};

export default ShoppingCart;
