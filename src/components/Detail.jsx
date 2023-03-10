import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useContextCustom } from "../context/StateProvider";
import { AiFillStar } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";
const Detail = () => {
  const { id } = useParams();
  const {
    state: { products },
    dispatch,
  } = useContextCustom();

  const detailProduct = products?.find((product) => product.id == id);
  console.log(detailProduct);

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: "100vw" }}
      exit={{ x: "100vw" }}
      transition={{ duration: 0.5 }}
      className=" w-screen flex flex-col md:flex-row gap-10 lg:gap-40 px-10 py-20">
      <div className=" md:w-[30%] w-full">
        <img
          src={detailProduct.image}
          width={"100%"}
          className="rounded-lg"
          alt=""
        />
      </div>
      <div className=" flex-1">
        <div className=" flex justify-between items-center">
          <p>{detailProduct.title}</p>
          <p className=" bg-green-500 px-4 py-1 text-white rounded-full">
            ${detailProduct.originalPrice}
          </p>
        </div>
        <p className=" my-2 flex items-center gap-3">
          <span>{detailProduct.rating.rate}</span>
          <span>
            {[...Array(5)].map((x, index) => (
              <AiFillStar
                key={index}
                size={20}
                className={`inline-block ${
                  Math.ceil(Number(detailProduct.rating.rate)) > index
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </span>
          <span className=" text-blue-400">
            {detailProduct.rating.count} left
          </span>
        </p>
        <div className="flex gap-5">
          <button
            className={`py-2 my-2  px-3 rounded-sm text-white w-full
            ${
              detailProduct.added
                ? " bg-green-500"
                : "bg-blue-400 hover:opacity-80"
            }`}
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: detailProduct });
              dispatch({ type: "ADDED_TRUE", payload: detailProduct.id });
            }}
            disabled={detailProduct.added}>
            {detailProduct.added ? " Added" : " Add to Cart"}
          </button>
          <Link
            to="/"
            className={`py-3  px-3 rounded-sm my-2 text-white bg-yellow-400 hover:opacity-80 w-full text-center `}>
            <button>Back to Home</button>
          </Link>
        </div>
        <p className=" my-5">
          <span className=" tracking-wide ">Description</span>
          <span className=" whitespace-wrap text-sm lg:text-base text-gray-500 mt-5 tracking-wide block">
            {detailProduct.description}
          </span>
        </p>
        <hr />
        <p className=" my-10 tracking-wider">
          Category -{" "}
          <span className=" text-gray-500">{detailProduct.category}</span>
        </p>
        <div className="flex flex-col md:flex-row gap-10 w-full">
          <div className="rounded-md border bg-slate-100 w-full text-center p-10 flex flex-col items-center gap-3">
            <GiWorld size={30} color="gray" />
            <p className=" font-medium">International delivery</p>
            <p className=" font-light text-gray-500">
              Get your order in 2 days
            </p>
          </div>
          <div className="rounded-md border bg-slate-100 w-full text-center p-10 flex flex-col items-center gap-3">
            <RiMoneyDollarCircleLine size={30} color="gray" />
            <p className=" font-medium">Loyalty rewards</p>
            <p className=" font-light text-gray-500">
              Participate in our membership
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Detail;
