import React, { useState } from "react";

interface Props {
  items: {
    id: number;
    description: string;
    amount: number;
    category: string;
  }[];
  categories: string[];
  handleDelete: (id: number) => void;
}

const ExpenseList = ({ items, categories, handleDelete }: Props) => {
  const [filterItems, setFilterItems] = useState(items);

  let selectedFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectCategory = e.target.value;
    if (selectCategory === "all") {
      setFilterItems(items);
    } else {
      setFilterItems(items.filter((item) => item.category === selectCategory));
    }
  };

  const onClick = (id: number) => {
    handleDelete(id);
    console.log(items.length);
    setFilterItems(items);
    console.log("done 2");
  };

  return (
    <>
      <div>{items.length}</div>
      <div>{filterItems.length}</div>
      <select
        onChange={selectedFilter}
        className="form-select"
        aria-label="Default select example"
      >
        <option value={"all"}>All Categories</option>
        {categories.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {filterItems.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => onClick(item.id)}
                >
                  Danger
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
