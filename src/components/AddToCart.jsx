import React from "react";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/StateProvider";
import CartItem from "./CartItem";
import { motion, spring } from "framer-motion";
const AddToCart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContextCustom();
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: "-100vw" }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.7 }}
      className=" p-5 w-[90%] mx-auto flex flex-col">
      <h1 className=" text-3xl font-semibold tracking-wide mb-5">Your Cart</h1>
      {cart.length == 0 && (
        <h1 className=" text-center my-10 tracking-wider uppercase font-medium text-4xl">
          Your Cart is Empty
        </h1>
      )}
      {cart?.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      {cart.length > 0 && (
        <div className=" border-t border-slate-300 py-5 mt-10 flex justify-between items-center">
          <p className=" text-slate-600 font-semibold text-2xl">Total</p>
          <p className=" text-slate-600 font-bold text-2xl">
            $ {cart.reduce((pv, cv) => pv + cv.price, 0).toFixed(2)}
          </p>
        </div>
      )}
      {cart.length > 0 ? (
        <button
          className=" self-center bg-red-500 py-3 px-6 rounded-md text-white  active:bg-red-600  hover:bg-red-400 transition-all duration-100"
          onClick={() => {
            dispatch({ type: "CLEAR_CART" });
          }}>
          Clear Cart
        </button>
      ) : (
        <Link
          to="/"
          className="self-center bg-yellow-500 py-3 px-6 rounded-md text-white  active:bg-yellow-600  hover:bg-yellow-400 transition-all duration-100">
          Go back to Home
        </Link>
      )}
    </motion.div>
  );
};

export default AddToCart;
