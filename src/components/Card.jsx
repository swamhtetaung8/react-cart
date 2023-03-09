import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/StateProvider";

const Card = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = useContextCustom();

  return (
    <div className=" p-6 border rounded-lg shadow-xl w-80 text-center hover:rotate-3 transition-all duration-200">
      <h2 className=" text-2xl truncate font-medium">{product.title}</h2>
      <img
        src={product.image}
        className=" h-64 py-3 mx-auto object-contain"
        alt=""
      />
      <p className=" my-3 text-slate-600 font-bold text-2xl">
        $ {product.price}
      </p>
      <div className=" flex gap-3 justify-center">
        <button
          className={`py-2  px-3 rounded-md text-white
            ${
              product.added ? " bg-green-500" : "bg-blue-400 hover:opacity-80"
            }`}
          onClick={() => {
            dispatch({ type: "ADD_TO_CART", payload: product });
            dispatch({ type: "ADDED_TRUE", payload: product.id });
          }}
          disabled={product.added}>
          {product.added ? " Added" : " Add to Cart"}
        </button>
        <Link to={`/detail/${product.id}`}>
          <button className=" bg-yellow-400 py-2 hover:bg-yellow-500 px-3 rounded-md text-white">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
