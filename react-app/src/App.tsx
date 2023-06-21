import { useState } from "react";
import produce from "immer";
import Game from "./components/GameExe";
import Pizza from "./components/PizzaExe/Pizza";
import Discount from "./components/Discount";

function App() {
  return (
    <>
      <Game />
      <Pizza></Pizza>
      <Discount></Discount>
    </>
  );
}

export default App;
