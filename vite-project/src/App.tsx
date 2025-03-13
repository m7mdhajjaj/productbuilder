import ProductCard from "./component/ProductCard";
import { productList } from "./component/data";

function App() {
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div>
      <div className="border-2 border-gray-200 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5">
        {renderProductList}
      </div>
    </div>
  );
}
export default App;
