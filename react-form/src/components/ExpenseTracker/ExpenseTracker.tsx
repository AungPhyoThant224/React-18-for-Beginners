import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import produce from "immer";

const ExpenseTracker = () => {
  const [items, setItems] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Groceries" },
    { id: 2, description: "Cable", amount: 10, category: "Electricity" },
    { id: 3, description: "Sugar", amount: 10, category: "Groceries" },
  ]);
  let categories = ["Groceries", "Electricity"];

  const handleDelete = (id: number) => {
    setItems(
      produce((draft) => {
        let index;
        draft.map((item, idx) => {
          if (item.id === id) {
            index = idx;
            return;
          }
        });
        if (index !== undefined) {
          draft.splice(index, 1);
        }
      })
    );
    console.log("done 1");
  };

  return (
    <>
      <ExpenseForm></ExpenseForm>
      <ExpenseList
        items={items}
        categories={categories}
        handleDelete={handleDelete}
      ></ExpenseList>
    </>
  );
};

export default ExpenseTracker;
