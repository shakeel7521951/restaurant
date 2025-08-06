import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialPinterest } from "react-icons/ti";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";

const DetailSuper = () => {
  const { state } = useLocation();
  const [value, setvalue] = useState(1);

  const Increfunc = () => setvalue(value + 1);
  const Decrfunc = () => {
    if (value > 1) setvalue(value - 1);
  };

  if (!state) {
    return (
      <div className="text-center text-red-400 mt-10 font-semibold text-xl">
        Product Detail Page Not Found
      </div>
    );
  }
  const [mainimg,setmainimg]=useState(state.image)

  return (
    <div className="p-4 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Images */}
        <div className="flex flex-col w-full gap-5 p-3">
          <div className="relative overflow-hidden w-full h-72 md:h-96 lg:h-full">
            <img
              src={mainimg}
              alt="main"
              className="w-full h-full object-cover rounded-md transition duration-300"
            />
            <div className="absolute top-0 left-0 bg-rose-500 text-white px-3 py-1 text-sm font-semibold rounded-br-md">
              Sale!
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src={state.img2}
              alt="img2"
              className="w-20 h-20 object-cover rounded-md hover:opacity-70 transition cursor-pointer"
              onClick={() => setmainimg(state.img2)}
            />
            <img
              src={state.img3}
              alt="img3"
              className="w-20 h-20 object-cover rounded-md hover:opacity-70 transition cursor-pointer"
              onClick={() => setmainimg(state.img3)}
            />
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="w-full p-5">
          <h1 className="text-2xl sm:text-4xl whitespace-nowrap font-bold mb-2 font-mono">{state.name}</h1>
          <p className="text-3xl font-semibold text-rose-500 mb-4">
            {state.price}
          </p>

          <div className="py-5 border-y border-gray-300 mb-6">
            <p className="text-gray-700">{state.desc}</p>
          </div>

          {/* Flavour Select */}
          <div className="mb-6 flex items-center gap-6">
            <p className="font-semibold text-lg">Flavour:</p>
            <select className="border border-gray-300 px-4 py-2 rounded-md focus:outline-rose-400">
              <option>Choose Option</option>
              <option value="milk">Milk</option>
              <option value="chocoleti">Chocoleti</option>
            </select>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-8">
            <div className="border rounded-md flex items-center gap-4 px-4 py-2 border-gray-300">
              <span className="text-lg font-medium">{value}</span>
              <div className="flex flex-col text-xl text-gray-600">
                <IoMdArrowDropup onClick={Increfunc} className="cursor-pointer hover:text-rose-500" />
                <MdOutlineArrowDropDown onClick={Decrfunc} className="cursor-pointer hover:text-rose-500" />
              </div>
            </div>
            <Link>
              <button className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-rose-500 transition">
                Add to Cart
              </button>
            </Link>
          </div>

          {/* Product Meta Info */}
          <div className="flex flex-col gap-3 text-sm text-gray-700 mb-6">
            <div>
              <span className="font-semibold">SKU:</span> N/A
            </div>
            <div>
              <span className="font-semibold">Category:</span> Fast Food
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-semibold">Share:</span>
            <div className="flex gap-3">
              {[FaFacebookF, RiTwitterXFill, FaLinkedinIn, TiSocialPinterest].map(
                (Icon, idx) => (
                  <Link key={idx}>
                    <div className="p-2 border border-gray-300 rounded-full hover:bg-rose-100 transition cursor-pointer">
                      <Icon />
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSuper;
