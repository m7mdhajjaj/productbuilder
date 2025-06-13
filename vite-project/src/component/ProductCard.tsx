import Image from "./Image";
import Button from "./ui/Button";
import { IProduct } from "./interfaces/IProduct";
import { TxtSlice } from "./functions/functions";
import ColorCircle from "./colorCircle";
interface Iprobs {
  product: IProduct;
  onEdit: (product: IProduct) => void;
  onDelete: (id: string) => void;
}

const ProductCard = ({ product, onEdit, onDelete }: Iprobs) => {
  const renderColors = product.colors.map((color) => (
    <ColorCircle key={color} color={color} />
  ));
  return (
    <div className="max-w-sm md:max-w-lg lg:max-w-xl mx-auto md:mx-0 flex flex-col border border-gray-200 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <Image
        src={product.imageURL}
        alt="Product Image"
        classname="my-4 rounded-xl object-cover w-full h-48 shadow-md"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
        {TxtSlice(product.description)}
      </p>
      <div className="flex items-center flex-wrap space-x-2 mb-4">
        {renderColors}
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold text-gray-900">
          {product.price}$
        </span>
        <Image
          src={product.imageURL}
          alt="Product Thumbnail"
          classname="w-12 h-12 rounded-full cursor-pointer object-cover border-2 border-gray-300 shadow-sm"
        />
      </div>
      <div className="flex items-center justify-between space-x-4">
        {" "}
        <Button
          classname="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
          width="w-full"
          onClick={() => onEdit(product)}>
          Edit
        </Button>
        <Button
          classname="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
          width="w-full"
          onClick={() => product.id && onDelete(product.id)}>
          Destroy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
