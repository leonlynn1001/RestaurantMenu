import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductGroup from "./components/ProductGroup";
import ProductRow from "./components/ProductRow";
import InputForm from "./components/InputForm";
import logo from "./images/brand-logo.png";
import { v4 as uuid } from "uuid";
function App() {
  console.log(uuid());
  const [newProduct, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    id: uuid(),
  });
  // useEffect(() => {
  //   localStorage.setItem("product":[]);
  // }, []);
  return (
    <main className=" bg-gray-100 h-screen p-2">
      <div className="container flex h-100 bg-white mx-auto">
        <div className="w-1/2 p-4">
          {/* add form */}
          <InputForm newProduct={newProduct} setNewProduct={setProduct} />
        </div>
        {/* preview UI*/}
        <div className="w-1/2 p-4 flex justify-center preview">
          <div className="w-2/3 mx-auto">
            <div className="flex justify-center items-center">
              <img src={logo} alt="brandLogo" />
            </div>

            {/* product gruop */}
            <ProductGroup />
            <ProductGroup />
            <div className="mt-4">
              <div className="flex justify-between text-2xl text-bold">
                <h2>Fresh Juice</h2>
                <h2>Price</h2>
              </div>
              <ProductRow name={newProduct.name} price={newProduct.price} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
