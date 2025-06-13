import { useState } from "react";
import ProductCard from "./component/ProductCard";
import { productList } from "./component/data";
import MyModal from "./component/ui/Modal";
import Button from "./component/ui/Button";
import { formInputsList } from "./component/data";
import Input from "./component/ui/input";
import { IProduct, ICategory } from "./component/interfaces/IProduct";
import { errorValidation } from "./validation";
import ErrorMessage from "./component/errorMessage";
import { colors } from "./component/data";
import { v4 as uuid } from "uuid";

import ColorCircle from "./component/colorCircle";
import Select from "./component/ui/selectlist";
function App() {
  const defaultProductObj = {
    title: "",
    price: "",
    description: "",
    imageURL: "",
    colors: [],
    category: {
      id: "",
      name: "",
      imageURL: "",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [error2, setError] = useState({
    title: "",
    price: "",
    description: "",
    imageURL: "",
  });
  const [Product, setProduct] = useState<IProduct>(defaultProductObj);
  const [editMode, setEditMode] = useState(false);
  const [editProductId, setEditProductId] = useState<string | undefined>();
  function open() {
    setIsOpen(true);
    setEditMode(false);
    setProduct(defaultProductObj);
    setTempColor([]);
  }

  function openEditModal(product: IProduct) {
    setEditMode(true);
    // Ensure the category has an id if it doesn't already have one
    const productWithValidCategory = {
      ...product,
      category: {
        ...product.category,
        id: "temp-id", // Add a temporary ID if needed
      },
    };
    setProduct(productWithValidCategory);
    setEditProductId(product.id);
    setTempColor(product.colors || []);
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setEditMode(false);
    setProduct(defaultProductObj);
    setTempColor([]);
  }

  const deleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts((prev) => prev.filter((product) => product.id !== id));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setProduct({
      ...Product,
      [name]: value,
    });
    setError({
      ...error2,
      [name]: "",
    });
  };
  const renderProductList = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      onEdit={openEditModal}
      onDelete={deleteProduct}
    />
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
        value={Product[input.name]}
        onChange={handleChange}
      />
      <ErrorMessage message={error2[input.name]} />
    </div>
  ));
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, price, description, imageURL } = Product;
    const error = errorValidation({
      title,
      price,
      description,
      imageURL,
    });
    const hasErrorMessage =
      Object.values(error).some((err) => err == "") &&
      Object.values(error).every((err) => err == "");
    if (!hasErrorMessage) {
      setError(error);
      return;
    }

    if (editMode && editProductId) {
      // Update existing product
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editProductId
            ? { ...Product, colors: tempColor, id: editProductId }
            : product
        )
      );
    } else {
      // Add new product
      setProducts((prev) => [
        ...prev,
        { ...Product, colors: tempColor, id: uuid() },
      ]);
    }

    setProduct(defaultProductObj);
    setTempColor([]);
    close();
  };
  const cancelHandler = (event: React.FormEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setProduct(defaultProductObj);
    close();
  };
  const handleCategoryChange = (category: ICategory) => {
    setProduct({
      ...Product,
      category: category,
    });
  };

  const renderColors = colors.map((color) => (
    <ColorCircle
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <main className="container mx-auto">
      <div className="flex justify-center my-6">
        <Button
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          onClick={() => open()}>
          Build New Product
        </Button>
      </div>
      <div className="border-2 border-gray-200 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5">
        {renderProductList}
        <MyModal
          isOpenn={isOpen}
          close={close}
          title={editMode ? "Edit Product" : "Add New Product"}>
          <form
            className="flex flex-col space-x-3"
            onSubmit={submitHandler}
            onClick={(e) => e.stopPropagation()}>
            {renderFormInputs}
            <Select
              selectedCategory={Product.category as ICategory}
              onCategoryChange={handleCategoryChange}
            />

            <div className=" flex items-center flex-wrap space-x-1">
              {renderColors}
            </div>
            <div className=" flex items-center flex-wrap space-x-1">
              {tempColor.map((color) => (
                <span
                  key={color}
                  className="block "
                  style={{ backgroundColor: color }}>
                  {color}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between space-x-1.5 my-1.5">
              <Button className="w-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                {editMode ? "Update" : "Submit"}
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                onClick={cancelHandler}>
                Cancel
              </Button>
            </div>
          </form>
        </MyModal>
      </div>
    </main>
  );
}
export default App;
