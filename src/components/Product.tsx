import { products } from "../constants/data";
import Card from "./Card";

const Product = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-col-4 gap-4 my-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Product;
