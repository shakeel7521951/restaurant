// components/ProductCard.jsx
import React, { useState } from "react";
import "../styles/carousel.css";

const categories = ["All", "Rice", "Chinese", "Burger", "Dinner"];

const foodItems = [
  {
    id: 1,
    category: ["Rice", "Dinner", "Lunch"],
    title: "Vegetable Salad",
    type: "Dinner,Lunch,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-7-min-112x112.jpg",
    originalPrice: "$15.00",
    discountPrice: "$14.00",
  },
  {
    id: 2,
    category: ["Rice", "Dinner"],
    title: "Mushroom Soup",
    type: "Dinner,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-8-min-112x112.jpg",
    originalPrice: "$25.00",
    discountPrice: "$21.00",
  },
  {
    id: 3,
    category: ["Dinner", "Pizza"],
    title: "Beyti Kebab",
    type: "Dinner,Pizza",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-9-min-112x112.jpg",
    originalPrice: "$16.00",
    discountPrice: "$15.00",
  },
  {
    id: 4,
    category: ["Burger", "Chinese", "Lunch"],
    title: "Burger with Meat",
    type: "Burger,Chinese,Lunch",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-10-min-112x112.jpg",
    originalPrice: "$22.00",
    discountPrice: "$16.00",
  },
  {
    id: 5,
    category: ["Rice", "Chinese", "Lunch"],
    title: "Stewed Beef Meat",
    type: "Chinese,Lunch,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-11-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$17.00",
  },
  {
    id: 6,
    category: ["Rice", "Chinese"],
    title: "Rice with Sausage",
    type: "Chinese,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/product-6-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$17.00",
  },
  {
    id: 7,
    category: ["Rice", "Chinese"],
    title: "Fried Rice Served",
    type: "Chinese,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-12-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$17.00",
  },
  {
    id: 8,
    category: ["Rice", "Lunch"],
    title: "Lula Kebab Adjika",
    type: "Lunch,Rice",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-13-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$18.00",
  },
  {
    id: 9,
    category: ["Pizza", "Burger", "Chinese"],
    title: "Alasta Sandwitch",
    type: "Burger,Chinese,Pizza",
    image:
      "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-14-min-112x112.jpg",
    originalPrice: "$19.00",
    discountPrice: "$17.00",
  },
];

function MenuCard() {
  const [selected, setSelected] = useState("All");

  const filteredItems =
    selected === "All"
      ? foodItems
      : foodItems.filter((item) => item.category.includes(selected));

  return (
    <div className="w-full max-w-[1344px] mx-auto px-4 pt-[60px] sm:pt-[97px] mb-[60px] sm:mb-[80px]">
      {/* Category Buttons */}
      <div className="w-full mb-[37px] flex flex-wrap justify-center sm:justify-between items-center border-b-2 border-gray-300 gap-2 sm:gap-0">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`text-[14px] sm:text-[26px] px-3 py-2 sm:px-[25px] sm:py-3 transition-all duration-200 border-b-2 ${
              selected === cat
                ? "text-[#E9004B] border-[#E9004B]"
                : "text-[#E9004B] border-transparent"
            }`}
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Filtered Cards */}
      <div className="flex flex-wrap gap-x-[40px] gap-y-4">
        {filteredItems.map((item) => (
          <div
            key={`${item.id}-${selected}`} // 👈 This makes the key unique on every filter change
    className="w-full sm:w-[410px] bg-white p-[20px] flex items-center rounded-xl transition-all duration-500 transform hover:scale-[1.01] animate-fade-in"
          >
            {/* Image */}
            <div className="w-[140px] sm:w-[200px] h-[90px] sm:h-[110px] mr-4 sm:mr-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col justify-between h-full w-full">
              <div>
                <h3
                  className="text-[16px] sm:text-[22px] text-black whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-[13px] sm:text-[15px] text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {item.type}
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-3 gap-y-2 mt-2">
                <span
                  className="text-[13px] sm:text-[14.5px] line-through opacity-70"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {item.originalPrice}
                </span>
                <span
                  className="text-[17px] sm:text-[19px] font-bold text-[#E9004B]"
                  style={{ fontFamily: "'Quicksand', sans-serif" }}
                >
                  {item.discountPrice}
                </span>
                <button
                  className="text-[13px] sm:text-[14px] border border-[#E9004B] text-[#E9004B] rounded-2xl px-3 py-1"
                  style={{
                    fontFamily: "'Quicksand', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuCard;
