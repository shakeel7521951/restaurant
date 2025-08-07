import React, { useRef, useEffect, useState } from "react";
import "../styles/carousel.css";
import Left from "./../Svgs/left";
import Right from "../Svgs/Right";

const foodItems = [
  {
    id: 1,
    name: "Pasta",
    img: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/catg-pasta.png",
  },
  {
    id: 2,
    name: "Breakfast",
    img: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/catg-chinese.png",
  },
  {
    id: 3,
    name: "Pizza",
    img: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/catg-pizza.png",
  },
  {
    id: 4,
    name: "Burger",
    img: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/catg-burger.png",
  },
  {
    id: 5,
    name: "Lunch",
    img: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/catg-rice.png",
  },
  {
    id: 6,
    name: "Dinner",
    img: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/catg-pizza.png",
  },
  {
    id: 7,
    name: "FastFood",
    img: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/catg-chinese.png",
  },
  {
    id: 8,
    name: "Rice",
    img: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/catg-rice.png",
  },
  {
    id: 9,
    name: "Chinese",
    img: "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/catg-chinese.png",
  },
];

const ITEM_WIDTH = 332;
const VISIBLE_COUNT = 4;

function CarouselOne() {
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const wrapperRef = useRef(null);
  const touchStartX = useRef(null);

  const fullList = [
    ...foodItems.slice(-VISIBLE_COUNT), 
    ...foodItems,
    ...foodItems.slice(0, VISIBLE_COUNT), 
  ];

  const totalItems = fullList.length;
  const initialIndex = VISIBLE_COUNT;

  useEffect(() => {
    setPosition(initialIndex); 
  }, []);

  const slideTo = (newIndex) => {
    setIsTransitioning(true);
    setPosition(newIndex);
  };

  const handleNext = () => {
    slideTo(position + 1);
  };

  const handlePrev = () => {
    slideTo(position - 1);
  };

  const handleTransitionEnd = () => {
    if (position >= totalItems - VISIBLE_COUNT) {
      // If we reach the clone end, jump to real start
      setIsTransitioning(false);
      setPosition(initialIndex);
    } else if (position <= 0) {
      // If we reach the clone start, jump to real end
      setIsTransitioning(false);
      setPosition(foodItems.length);
    }
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [position]);

  // Touch Support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <div className="w-full max-w-[1344px] mx-auto px-4 sm:pt-[80px] pt-[0px] pb-[30px]">
      <div>
        <div className="text-[#E9004B] text-[14px] tracking-widest pb-[7px] ml-3 text-center sm:text-left font-bold">
          MORE THAN 1200+DISHES
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <h2 className="text-[24px] sm:text-[36px] text-[#02060C] font-bold text-center sm:text-left pb-[15px]">
            Our Categories
          </h2>
          <div className="hidden sm:flex gap-3 mt-3">
            <button
              onClick={handlePrev}
              className="border border-gray-300 rounded-3xl p-2.5 hover:bg-[#E9004B] hover:text-white"
            >
              <Left />
            </button>
            <button
              onClick={handleNext}
              className="border border-gray-300 rounded-3xl p-2.5 hover:bg-[#E9004B] hover:text-white"
            >
              <Right />
            </button>
          </div>
        </div>
      </div>

      <div
        className="carousel-container flex justify-center mt-2 overflow-hidden w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={wrapperRef}
          className="carousel-wrapper flex gap-[20px]"
          style={{
            transform: `translateX(-${position * ITEM_WIDTH}px)`,
            transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {fullList.map((item, idx) => (
            <div
              className="carousel-item min-w-full sm:min-w-[312px]"
              key={`${item.id}-${idx}`}
            >
              <img src={item.img} alt={item.name} className="food-img" />
              <div className="mt-3">
                <h3 className="text-center font-bold">
                  {item.name} <span className="opacity-50 text-sm">(5)</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselOne;
