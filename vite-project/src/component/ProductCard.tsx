import Image from "./Image";
import Button from "./ui/Button";
interface Iprobs {}

const ProductCard = ({}: Iprobs) => {
  return (
    <div className="flex flex-col border-2 border-gray-200 p-4 rounded-lg shadow-lg">
      <Image
        src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg"
        alt="prodct car "
        classname="my-2 rounded-md"
      />
      <h3> Lamborghini new model 2025</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
        pariatur.
      </p>
      <div className=" flex items-center my-3 space-x-2">
        <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>500,000$</span>

        <Image
          src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg"
          alt="prodct car "
          classname="w-10 h-10 rounded-full cursor-pointer object-bottom"
        />
      </div>
      <div className="flex items-center justify-between space-x-1.5 my-1.5">
        <Button classname="bg-indigo-500" width="w-full" onClick={
            () => {
                alert('hello')
            }
        }>Edit</Button>
        <Button classname="bg-red-500" width="w-full">destroy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
