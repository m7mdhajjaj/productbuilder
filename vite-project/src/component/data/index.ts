import { v4 as uuid } from "uuid";
import { IProduct } from "../interfaces/IProduct";
import { IFormInput } from "../interfaces/IProduct";
export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Genesis GV70: Nominee",
    description:
      "As luxury brands go, South Korea’s Genesis is still in its infancy, having...",
    imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    price: "50000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
  },
  {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description:
      "A compact city car with efficient fuel consumption and modern features.A compact city car with efficient fuel consumption and modern features.A compact city car with efficient fuel consumption and modern features.A compact city car with efficient fuel consumption and modern features.",
    imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    price: "12000",
    colors: ["#000000", "#FFFFFF", "#FF5733"],
    category: {
      name: "Cars",
      imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
  },
  {
    id: uuid(),
    title: "Tesla Model S Plaid",
    description:
      "An electric performance sedan with a range of 390 miles and top speed of 200 mph.",
    imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",

    price: "130000",
    colors: ["#E63946", "#1D3557", "#A8DADC"],
    category: {
      name: "Electric Cars",
      imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    },
  },
  {
    id: uuid(),
    title: "Ford Mustang GT",
    description:
      "A legendary muscle car with a powerful V8 engine and aggressive styling.",
    imageURL: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    price: "55000",
    colors: ["#FF0000", "#000000", "#FFFFFF"],
    category: {
      name: "Sports Cars",
      imageURL: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
    },
  },
];
export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "number",
  },
];
