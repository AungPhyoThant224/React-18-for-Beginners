import { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [category, setCategory] = useState("");
  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Housing">Housing</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
