import produce from "immer";
import { useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  let handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    // setPizza(
    //   produce((draft) => {
    //     draft.toppings.push("Cheese");
    //   })
    // );
  };

  return (
    <>
      <h3>Pizza</h3>
      <div>{pizza.name}</div>
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Pizza;
