import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    name: "apple soda",
    price: 2,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 3 });
  };

  return (
    <div>
      {drink.name} & {drink.price}
      <button onClick={handleClick}>My button</button>
    </div>
  );
}

export default App;
