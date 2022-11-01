import React from "react";
import ProductRow from "./ProductRow";
function ProductGroup() {
  return (
    <div>
      <div className="mt-4">
        <div className="flex justify-between text-2xl text-bold">
          <h2>Mojito</h2>
          <h2>Price</h2>
        </div>
        <ProductRow name="latte" price="4000" />
        <ProductRow name="Mocha" pice="5000" />
      </div>
    </div>
  );
}

export default ProductGroup;
