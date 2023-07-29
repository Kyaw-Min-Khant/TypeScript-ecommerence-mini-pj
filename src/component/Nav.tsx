import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContextCustom } from "../context/productContext";
import { Link } from "react-router-dom";
const Nav = () => {
  const product = useContextCustom();
  const count = product?.state?.buyProducts;
  return (
    <div className=" bg-white">
      <div className=" flex py-3 mb-2 items-center justify-between container mx-auto px-10">
        <Link to="/">
          <h2 className=" text-2xl font-serif">NovaX</h2>
        </Link>
        <input
          type="text"
          className=" px-7 text-sm py-1 border border-slate-500 rounded-lg"
          placeholder="Search"
        />
        <Link to="/invoice">
          <div className=" relative">
            <AiOutlineShoppingCart className="text-3xl" />
            <span className=" font-semibold  bg-blue-600 text-sm text-white top-[-10px] right-[-10px] absolute px-2 py-[1px] rounded-full">
              {count?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
