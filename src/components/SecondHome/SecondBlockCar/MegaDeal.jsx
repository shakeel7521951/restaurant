import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import "../styles/animation.css";
import { useInView } from "../hooks/useInView";

function MegaDeal() {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="w-full max-w-[1344px] mx-auto h-auto flex flex-col sm:flex-row items-center sm:items-start justify-center mt-10 sm:space-x-10"
    >
      {/* Left Side: Image */}
      <div className="w-full sm:w-[752.4px] h-auto sm:h-[504.61px]">
        <img
          src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/h1-banner-burger.png"
          alt="Mega Deal"
          className={`w-full h-full object-cover bounce-zoom ${
            isInView ? "in-view" : ""
          }`}
        />
      </div>

      {/* Right Side: Description */}
      <div className="w-full sm:w-[514.8px] h-auto flex flex-col justify-between sm:mt-10 text-center sm:text-left items-center sm:items-start mt-6 px-2 sm:px-0">
        {/* Title */}
        <div
          className={`text-[20px] sm:text-[24px] text-white tracking-wider animate-tilt-scale ${
            isInView ? "in-view" : ""
          }`}
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500 }}
        >
          Special Kombo Pack
        </div>

        {/* Headline */}
        <div
          className={`text-[36px] sm:text-[60px] text-white py-2 sm:py-3 leading-tight animate-tilt-scale ${
            isInView ? "in-view" : ""
          }`}
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}
        >
          Today's Special burger Menu
        </div>

        {/* Description */}
        <div
          className={`text-[14px] sm:text-[16px] text-white py-2 animate-tilt-scale ${
            isInView ? "in-view" : ""
          }`}
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 400,
            lineHeight: "1.6",
          }}
        >
          Massa a of est sit commodo convallis auctor as aliquet ready to ready
          works any more sem. Massa a of est sit commodo any on convallis. Massa
          of est sit commodo.
        </div>

        {/* Button + Price */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mt-4">
          {/* Order Now Button */}
          <button
            className={`text-[14px] sm:text-[16px] px-6 py-2 sm:px-5 sm:py-3 border-2 text-white border-white rounded-3xl flex items-center justify-center gap-2 transition-all duration-600 hover:bg-white hover:text-[#E9004B] fade-up fade-delay-hadding ${
              isInView ? "in-view" : ""
            }`}
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
          >
            <ShoppingCartIcon className="w-4 h-5 text-inherit" />
            Order Now
          </button>

          {/* Price Info (hidden on mobile if needed) */}
          <div className="flex items-center gap-4 sm:flex-row mt-2 sm:mt-0">
            <div
              className="text-[24px] sm:text-[30px] font-bold text-white"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              $20.00
            </div>
            <div
              className="text-[14px] sm:text-[16px] line-through opacity-70 text-white"
              style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 400 }}
            >
              $23.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaDeal;
