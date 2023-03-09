import React from "react";
import { useContextCustom } from "../context/StateProvider";
import Card from "./Card";
import { CgSpinnerTwoAlt } from "react-icons/cg";
const Product = () => {
  const {
    state: { products },
    homeLoad,
  } = useContextCustom();
  // console.log(products);
  return (
    <div className=" flex flex-wrap gap-10 py-10 min-h-screen w-screen items-center justify-center">
      {homeLoad ? (
        <CgSpinnerTwoAlt className=" animate-spin" size={50} />
      ) : (
        products?.map((product) => <Card key={product.id} product={product} />)
      )}
    </div>
  );
};

export default Product;
