import React, { useEffect } from "react";

const ProductList = ({ category }: { category: string }) => {
  useEffect(() => {
    console.log("Fetching product in", category);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
