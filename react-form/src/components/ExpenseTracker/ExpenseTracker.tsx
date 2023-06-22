import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import produce from "immer";
import { FieldValues } from "react-hook-form";

const ExpenseTracker = () => {
  const [items, setItems] = useState([
    { id: 1, description: "Milk", amount: 10, category: "Groceries" },
    { id: 2, description: "Cable", amount: 10, category: "Utilities" },
    { id: 3, description: "Mic", amount: 10, category: "Entertainment" },
  ]);
  const [filtered, setFiltered] = useState("");
  let categories = ["Groceries", "Utilities", "Entertainment"];

  const handleAdd = (data: FieldValues) => {
    let id = items[items.length - 1].id + 1;
    let item = {
      id: id,
      description: data.description,
      amount: data.amount,
      category: data.category,
    };
    setItems([...items, item]);
  };

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
  };

  const filteredItem = filtered
    ? items.filter((item) => item.category === filtered)
    : items;

  return (
    <>
      <ExpenseForm categories={categories} handleAdd={handleAdd}></ExpenseForm>
      <ExpenseList
        items={filteredItem}
        categories={categories}
        handleDelete={handleDelete}
        handleFilter={(value) => setFiltered(value)}
      ></ExpenseList>
    </>
  );
};

export default ExpenseTracker;
