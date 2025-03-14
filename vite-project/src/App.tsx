import { useState } from "react";
import ProductCard from "./component/ProductCard";
import { productList } from "./component/data";
import MyModal from "./component/ui/Modal";
import Button from "./component/ui/Button";
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

  return (
    <main className="container mx-auto">
        <Button
          className="bg-blue-800 hover:bg-amber-50  w-50 "
          onClick={() => open()}>
          add product
        </Button>

      <div className="border-2 border-gray-200 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5">
        {renderProductList}
        <MyModal isOpenn={isOpen} close={close} title="add new product">
          <div className="flex items-center justify-between space-x-1.5 ">
            <Button className="bg-amber-400 w-full">submit</Button>
            <Button className="bg-amber-950 hover:bg-amber-50 w-full">
              cancel
            </Button>
          </div>
        </MyModal>
      </div>
    </main>
  );
}
export default App;
