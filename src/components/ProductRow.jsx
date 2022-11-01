import React from "react";

function ProductRow({ name, price }) {
  return (
    <div>
      <div className="flex justify-between text-lg text-semibold">
        <h2>{name}</h2>
        <h2>{price}</h2>
      </div>
    </div>
  );
}

export default ProductRow;
