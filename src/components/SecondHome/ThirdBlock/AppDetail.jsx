import React from "react";
import "../styles/animation.css";
import { useInView } from "../hooks/useInView";

function AppDetail() {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className="w-full max-w-[1344px] px-4 py-12 sm:py-0 flex flex-col sm:flex-row justify-center items-center gap-8 sm:ml-15 overflow-hidden"
    >
      {/* Left Side: Image (Hide on mobile) */}
      <div className="w-full sm:w-[396px] h-[396.9px] hidden sm:flex items-end">
        <img
          src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2025/02/Download-Apps.png"
          alt="Mega Deal"
          className={`w-full h-full object-contain app-detail ${
            isInView ? "in-view" : ""
          }`}
        />
      </div>

      {/* Right Side: Description */}
      <div className="w-full sm:w-[514.8px] sm:h-[369.6px] flex flex-col gap-y-5 justify-center items-center text-center">
        {/* Title */}
        <div
          className="text-[14px] text-white tracking-wider"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
        >
          DOWNLOAD APPS
        </div>

        {/* Headline */}
        <div
          className="text-[28px] sm:text-[36px] text-white leading-snug"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 600 }}
        >
          Download our Free App!
        </div>

        {/* Description */}
        {/* Description */}
<div
  className="text-[16px] text-white space-y-1 text-left"
  style={{
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: 400,
    lineHeight: "1.6",
  }}
>
  <div>✔ Find the nearest restaurant</div>
  <div>✔ Order food online</div>
  <div>✔ Delivery food near me</div>
</div>


        {/* Buttons (always in one line) */}
        <div className="flex flex-row justify-center sm:gap-3 mt-2">
          <div className="sm:w-[189.1px] sm:h-[54.31px] w-[159.1px] h-[34.31px]  bg-apple"></div>
          <div className="sm:w-[189.1px] sm:h-[54.31px] w-[159.1px] h-[34.31px] bg-googlePlay"></div>
        </div>
      </div>
    </div>
  );
}

export default AppDetail;
