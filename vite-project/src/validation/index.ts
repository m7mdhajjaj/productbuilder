export const errorValidation = (product: {
  title: string;
  price: string;
  description: string;
  imageURL: string;
}) => {
  const error: {
    title: string,
    price: string,
    description: string,
    imageURL: string,
  } = {
    title: "",
    price: "",
    description: "",
    imageURL: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 100
  ) {
    error.title = "Title must be between 10 and 100 characters";
  }
    if (!product.price.trim() || isNaN(+product.price)) {
        error.price = "Price must be a number";
    }
    if (!product.description.trim() || product.description.length < 20) {
        error.description = "Description must be at least 20 characters";
    }

    if (!product.imageURL.trim() || !validUrl) {
        error.imageURL = "Image URL is required and must be a valid URL";
    }
    
    
   
  return error;
};
