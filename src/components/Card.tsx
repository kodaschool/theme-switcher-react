interface Product {
  product: {
    id: string;
    name: string;
    desc: string;
    cost: string;
    img: string;
  };
}
const Card = ({ product }: Product) => {
  return (
    <div className="rounded-xl border  border-solid bg-white dark:bg-darkmode p-4">
      <div className="flex gap-4 h-auto items-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-[40px] h-[40px] rounded-full"
        />
        <div>
          <h1 className="text-primarydark:text-white ">{product.name}</h1>
          <p className="tracking-tight text-primary dark:text-white w-[90%]">
            {product.desc}
          </p>
        </div>
      </div>
      <hr className="text my-1" />
      <div className="flex justify-between mt-4">
        <p className="text-primary dark:text-white font-semibold">
          {product.cost}
          <span className="text-black dark:text-white">/month</span>
        </p>
        <button className="bg-primary dark:bg-darkmode">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
