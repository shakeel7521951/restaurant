// components/ProductCard.jsx
import React from "react";
import "../styles/carousel.css";

function ProductCard({ image, category, title, description, price, discount }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 text-center overflow-hidden relative">
      {/* Product Image */}
      <div className="relative">
        <div className="overflow-hidden rounded-md h-[180px]">
          {" "}
          {/* lock the height */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-800 ease-in-out hover:scale-115 block"
            loading="lazy"
          />
        </div>

        {/* ✅ Discount Badge at bottom-left inside the image */}
        <div
          className="absolute bottom-0 left-0 text-[13px] bg-[#E9004B] text-white text-xs px-2 py-2 rounded-tr-2xl
"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 500,
          }}
        >
          ${discount} OFF UPTO $100
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="items-center justify-center flex">
          <div className="text-sm bg-[#FFE0E1] w-20 p-1 rounded-full text-[#E9004B] mb-3 mt-1 hover:bg-[#E9004B] hover:text-white transition-colors duration-700">
            {category}
          </div>
        </div>
        <div className="items-center justify-center flex">
          <h3
            className="text-[22px] px-3 w-fit hover:text-[#E9004B] transition-colors duration-500 "
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 700,
            }}
          >
            {title}
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-6 mt-3">{description}</p>

        <div className="flex justify-between items-center">
          <span
            className="text-black text-xl font-semibold "
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 700,
            }}
          >
            {price}
          </span>
          <a
            href="#"
            className="text-[#E9004B] text-[14px] p-2 border rounded-3xl w-35 hover:bg-[#E9004B] hover:text-white transition-colors duration-700 "
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: 600,
            }}
          >
            View Options
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
