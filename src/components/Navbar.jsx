import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContextCustom } from "../context/StateProvider";
import { motion } from "framer-motion";
const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = useContextCustom();
  return (
    <nav className=" shadow-lg">
      <ul className=" flex items-center justify-between p-3 flex-col md:flex-row gap-5 md:gap-0">
        <li className=" flex items-center gap-3 ">
          <Link to="/">
            <h1 className=" text-xl md:text-2xl font-bold tracking-wide md:tracking-wider uppercase">
              Comforty
            </h1>
          </Link>
          <input
            type="text"
            className=" outline-none bg-slate-200 p-1 px-3 rounded-sm"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </li>
        <li className=" self-end pr-3">
          <Link to="/addtocart">
            <motion.button
              animate={cart.length > 0 ? { scale: 1.1 } : {}}
              initial={{ y: 0 }}
              transition={
                cart.length > 0 ? { repeat: Infinity, duration: 1 } : {}
              }
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <BsCart2 />
              <span className="sr-only"></span>
              {cart.length > 0 && (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
                  {cart.length}
                </div>
              )}
            </motion.button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
