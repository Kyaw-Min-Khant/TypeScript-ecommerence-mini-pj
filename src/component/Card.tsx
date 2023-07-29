import React from "react";
import { useContextCustom } from "../context/productContext";
type productsType = {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
  };
};
const Card: React.FC<productsType> = ({ product }) => {
  const { title, price, image, category } = product;
  const { dispatch, state } = useContextCustom();
  console.log(state);
  return (
    <div className=" w-[270px] bg-white relative rounded-md border shadow-md">
      <div className="bg-blue-600 absolute top-0 left-0 rounded ">
        <h2 className="text-xs px-2 py-1 text-white font-bold">{category}</h2>
      </div>
      <div className="">
        <img src={image} className=" h-[200px] object-fill mx-auto" alt="" />
      </div>
      <div className="px-3 py-2">
        <h2 className="text-lg text-black/70  truncate font-semibold ">
          {title}
        </h2>
        <h2 className=" text-sm text-slate-700 font-medium">${price}</h2>
      </div>
      <button
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        className=" font-bold text-white mx-auto block mb-2 px-4 py-1 rounded bg-blue-500"
      >
        Add to card
      </button>
    </div>
  );
};

export default Card;
