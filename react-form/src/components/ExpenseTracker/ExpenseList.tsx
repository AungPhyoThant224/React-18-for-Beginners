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
  handleFilter: (value: string) => void;
}

const ExpenseList = ({
  items,
  categories,
  handleDelete,
  handleFilter,
}: Props) => {
  let selectedFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleFilter(e.target.value);
  };

  const onClick = (id: number) => {
    handleDelete(id);
  };

  return (
    <>
      <select
        onChange={selectedFilter}
        className="form-select"
        aria-label="Default select example"
      >
        <option value={""}>All Categories</option>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
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
        <tfoot>
          <tr>
            <td></td>
            <td>Total</td>
            <td>${items.reduce((acc, item) => acc + item.amount, 0)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
