import { createProduct } from "./helpers/objectHelpers";
import { IProduct } from "./interfaces/iProduct";

const newProduct: IProduct = createProduct({
    id: 12,
    code: "d f g", 
    title: "This is the title of the product, it will be truncated"
});

console.log(newProduct);
