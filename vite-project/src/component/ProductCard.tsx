interface Iprobs {}

const ProductCard = ({}: Iprobs) => {
  return (
    <div className="flex flex-col border-2 border-gray-200 p-4 rounded-lg shadow-lg">
      <img
        src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg"
        alt=" product image"
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
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Lamborghini-mountain-fog-sports-car-photos.jpg"
          alt=" product image"
        />
      </div>
      <div className="flex items-center justify-between space-x-1.5 my-1.5">
        <button className="bg-indigo-500 w-full text-white rounded-md p-2 cursor-pointer">
          Edit
        </button>
        <button className="bg-red-700 w-full text-white rounded-md p-2 cursor-pointer">
          Destroy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
