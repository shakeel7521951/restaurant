import React from "react";
import "../styles/carousel.css"; // CSS for animation

const riderImages = [
  "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/brand-black-3.svg",
  "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/brand-black-4.svg",
  "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/brand-black-3.svg",
  "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/brand-black-4.svg",
  "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/brand-black-1.svg",
  "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/brand-black-2.svg"
];

function FoodRider() {
  return (
    <div className="w-full overflow-hidden py-6">
      <span className="text-[14px] text-[#333333] block mb-10">
        POPULAR FOOD RIDER
      </span>

      <div className="relative w-fit">
        <div className="carousel-track flex animate-scroll hover:[animation-play-state:paused]">
          {[...riderImages, ...riderImages].map((src, index) => (
            <div key={index} className="w-[100px] flex-shrink-0 mx-4">
              <img
                src={src}
                alt={`Food Rider ${index + 1}`}
                className="w-fit h-auto opacity-65 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodRider;
