import { useEffect, useState } from "react";
import { useContextCustom } from "../context/productContext";
import InvoiceCard from "./InvoiceCard";

const Invoice = () => {
  const {
    state: { buyProducts },
  } = useContextCustom();
  const [total, setTotal] = useState(0);
  const increaseTotal = (price: number) => {
    setTotal(total + price);
  };
  const decreaseTotal = (price: number) => {
    setTotal(total - price);
  };
  const subTotal = buyProducts?.reduce((total, data) => total + data?.price, 0);
  useEffect(() => {
    setTotal(subTotal);
  }, []);
  return (
    <div className=" min-h-screen">
      <h2 className=" text-3xl my-3 font-body text-center font-semibold text-black/70 py-3">
        Invoice Card
      </h2>
      <div className="flex justify-around">
        <div className=" w-5/12 flex flex-col justify-around gap-y-5 ">
          {buyProducts?.map((item) => (
            <InvoiceCard
              increaseTotal={increaseTotal}
              decreaseTotal={decreaseTotal}
              key={item.id}
              {...item}
            />
          ))}
        </div>
        <div className="mt-3">
          <div className=" text-2xl flex ">
            <h2 className=" font-semibold">Total :</h2>
            <h2 className=" ps-2 ">{total.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
