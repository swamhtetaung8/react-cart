import React from "react";
import { useContextCustom } from "../context/StateProvider";

const CartItem = ({ cartItem }) => {
  const { dispatch } = useContextCustom();
  return (
    <div className=" p-5 border rounded-lg shadow-xl w-full  transition-all duration-200 mb-5">
      <h2 className=" text-xl truncate font-medium">{cartItem.title}</h2>
      <img
        src={cartItem.image}
        className=" mx-auto h-64 py-3 object-contain"
        alt=""
      />
      <p className=" text-slate-600 font-bold text-2xl">
        $ {cartItem.price.toFixed(2)}
      </p>
      <div className="  my-3 flex justify-between items-center">
        <button
          className=" bg-red-500 py-2 md:px-4 px-2 rounded-md text-white"
          onClick={() => {
            dispatch({ type: "REMOVE_ITEM", payload: cartItem.id });
          }}>
          Remove Item
        </button>
        <div className=" flex gap-3 items-center">
          <button
            className=" bg-red-500 px-4 py-2 text-white border border-red-500 cursor-pointer rounded-l"
            onClick={() =>
              dispatch({ type: "DECREASE", payload: cartItem.id })
            }>
            -
          </button>
          <p className=" w-6 text-end">{cartItem.quantity}</p>
          <button
            className=" bg-blue-500 px-4 py-2 text-white border border-blue-500 cursor-pointer rounded-r"
            onClick={() =>
              dispatch({ type: "INCREASE", payload: cartItem.id })
            }>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
