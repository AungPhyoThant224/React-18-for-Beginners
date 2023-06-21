import { useState } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";

const Ecommerce = () => {
  const [products, setProduct] = useState(["Apple", "Banana"]);
  return (
    <>
      <NavBar productCount={products.length}></NavBar>
      <ShoppingCart
        products={products}
        onHandleClick={() => setProduct([])}
      ></ShoppingCart>
    </>
  );
};

export default Ecommerce;
