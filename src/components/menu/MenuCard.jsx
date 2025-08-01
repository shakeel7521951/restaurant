import React from "react";

const MenuCard = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="group w-full md:w-[30%] max-h-[200px] flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-5"
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 h-40 md:h-auto overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="md:w-1/2 px-3 text-center md:text-left">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <h3 className="text-lg mb-4">
                <span className="line-through text-gray-400 mr-2">
                  {item.originalPrice}
                </span>
                <span className="text-[#E9004B] font-bold">
                  {item.discountedPrice}
                </span>
              </h3>
              <button className="mt-2 px-6 py-2 border-2 text-[#E9004B] border-[#E9004B] hover:bg-[#E9004B] hover:text-white rounded-full transition-colors duration-200">
                Order Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuCard;
