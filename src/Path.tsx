import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import ProductsPage from "./component/ProductsPage";
import Invoice from "./component/Invoice";

const Path = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </div>
  );
};

export default Path;
