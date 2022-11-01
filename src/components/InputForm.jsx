import React from "react";

export default function InputForm({ newProduct, setNewProduct }) {
  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-sm input-bordered w-full max-w-xs"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Price:</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-sm input-bordered w-full max-w-xs"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Category:</span>
          </label>
          <select className="select select-sm select-bordered w-full max-w-xs">
            <option disabled selected>
              Select Category
            </option>
            <option>Drinks</option>
            <option>Cake</option>
            <option>Pizza</option>
          </select>
        </div>
        <button className="btn btn-sm btn-primary mt-4">Save</button>
      </form>
    </div>
  );
}
