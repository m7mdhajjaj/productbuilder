import Image from "./Image";
import Button from "./ui/Button";
import { IProduct } from "./interfaces/IProduct";
import { TxtSlice } from "./functions/functions";
interface Iprobs {

  product : IProduct
}

const ProductCard = ({ product }: Iprobs) => {
  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-xl mx-auto md:mx-0  flex flex-col border-2 border-gray-200 p-4 rounded-lg shadow-lg">
      <Image
        src={product.imageURL}
        alt="prodct car "
        classname="my-2 rounded-md"
      />
      <h3>{product.title}</h3>
      <p>{TxtSlice(product.description)}</p>
      <div className=" flex items-center my-3 space-x-2">
        <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span> {product.price}$</span>

        <Image
          src={product.imageURL}
          alt="prodct car "
          classname="w-10 h-10 rounded-full cursor-pointer object-bottom"
        />
      </div>
      <div className="flex items-center justify-between space-x-1.5 my-1.5">
        <Button
          classname="bg-indigo-500"
          width="w-full"
          onClick={() => {
            alert("hello");
          }}>
          Edit
        </Button>
        <Button classname="bg-red-500" width="w-full">
          destroy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
