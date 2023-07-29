import { useContextCustom } from "../context/productContext";
import Card from "./Card";

const ProductsPage = () => {
  const {
    state: { products },
  } = useContextCustom();
  return (
    <div className="flex flex-wrap container mx-auto justify-around gap-x-5 gap-y-10">
      {products?.map((product) => (
        <Card key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
