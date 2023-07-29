import { useState } from "react";
import { Rating } from "@mantine/core";
import { BiTrash } from "react-icons/bi";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
// import { useContextCustom } from "../context/productContext";
type RatingType = {
  rate: number;
};

type props = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  rating: RatingType;
  increaseTotal: (price: number) => void;
  decreaseTotal: (price: number) => void;
};
const InvoiceCard = (props: props) => {
  const {
    id,
    title,
    image,
    price,
    description,
    rating,
    increaseTotal,
    decreaseTotal,
  } = props;
  console.log(rating);
  const [count, setCont] = useState(1);
  const add = () => {
    setCont((pre) => pre + 1);
    increaseTotal(price);
  };
  const minus = () => {
    if (count > 1) {
      decreaseTotal(price);
      return setCont((pre) => pre - 1);
    }
  };
  // const { dispatch } = useContextCustom();

  // const removeFromCart = (id: number) => {
  //   dispatch({
  //     type: "REMOVE_FROM_CART",
  //     payload: { id, title, image, description, price },
  //   });
  // };
  const eachTotal = price * count;
  return (
    <div className=" flex rounded-lg relative p-3 bg-white w-[600px] items-center justify-around">
      <div
        onClick={() => console.log("Clcik")}
        className=" absolute top-3 right-2  "
      >
        <BiTrash className=" text-xl text-red-600" />
      </div>
      <div className="">
        <img src={image} className="h-[180px] w-[150px] object-fill" alt="" />
      </div>
      <div className="  w-[280px]">
        <h2
          className="text-xl
pb-1 font-semibold text-black/80 truncate"
        >
          {title}
        </h2>
        <div className=" flex  items-center gap-x-10">
          <h2 className=" text-sm  font-serif font-semibold">
            ${eachTotal.toFixed(2)}
          </h2>
          <Rating value={rating?.rate} fractions={2} readOnly size="xs" />
        </div>
        <h2 className=" h-[50px]  my-2 overflow-hidden text-xs text-slate-800">
          {description}
        </h2>
        <div
          className="  flex mt-4 gap-x-3 px-1 rounded border
         shadow w-[100px] items-center"
        >
          <MdOutlineKeyboardArrowUp onClick={add} className="py-1 text-3xl" />
          <span>{count}</span>
          <MdOutlineKeyboardArrowDown
            onClick={minus}
            className=" py-1 text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
