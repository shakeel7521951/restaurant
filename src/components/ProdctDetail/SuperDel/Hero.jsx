import React from "react";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  const { state } = useLocation();
  return (
    <section className="relative w-full h-[300px] md:h-[350px]">
      <img
        src="./menu/bread_banner-scaled.jpg"
        alt="Bread on a wooden table - Menu banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
        <div className="flex flex-col justify-center sm:pl-10">
          <h1 className="text-[25px] sm:text-[45px] font-bold whitespace-nowrap font-mono">Product Details</h1>
          <p className="flex whitespace-nowrap gap-2 text-sm sm:text-md ">
            <Link to="/" className="hover:underline">
              <span>foodymat</span>
            </Link>
            <span className="text-pink-400">/</span>
            <Link to="/menu" className="hover:underline">
              <span>Product</span>
            </Link>
            <span className="text-pink-400">/</span>
            <Link className="hover:underline text-pink-400">
              <span>{state?.title || "Nothing Found"}</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
