import { useState } from "react";
import produce from "immer";

const Discount = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  let handleClick = () => {
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: 2 } : item
    //   ),
    // });

    setCart(
      produce((draft) => {
        draft.items.filter((item) => {
          if (item.id === 1) item.quantity = 2;
          return item;
        });
      })
    );
  };

  return (
    <>
      <h3>Discount</h3>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title}, {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Discount;
