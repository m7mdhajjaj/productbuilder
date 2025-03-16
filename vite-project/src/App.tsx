import { useState } from "react";
import ProductCard from "./component/ProductCard";
import { productList } from "./component/data";
import MyModal from "./component/ui/Modal";
import Button from "./component/ui/Button";
import { formInputsList } from "./component/data";
import Input from "./component/ui/input";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputs = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col space-y-1">
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        className="p-2 border-2 border-gray-200 h-10 my-2 "
        type={input.type}
        name={input.name}
        id={input.id}
        placeholder={input.label}
      />
    </div>
  ));

  return (
    <main className="container mx-auto">
      <Button
        className="bg-blue-800 hover:bg-amber-50  w-50 "
        onClick={() => open()}>
        add product
      </Button>

      <div className="border-2 border-gray-200 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5">
        {renderProductList}
        <MyModal isOpenn={isOpen} close={close} title="Add New Product">
          <form
            className="flex flex-col space-x-3">
            {renderFormInputs}
            <div className="flex items-center justify-between space-x-1.5 ">
              <Button className="bg-indigo-500 hover:bg-indigo-300 w-full h-10 rounded-md text-white">
                submit
              </Button>
              <Button className="bg-gray-700  hover:bg-gray-500 w-full h-10  rounded-md text-white">
                cancel
              </Button>
            </div>
          </form>
        </MyModal>
      </div>
    </main>
  );
}
export default App;
