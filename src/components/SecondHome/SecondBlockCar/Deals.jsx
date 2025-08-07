import React from "react";
import ProductCard from "./ProductCard";
import { useInView } from "../hooks/useInView";

const products = new Array(8).fill(null).map((_, i) => ({
  id: i,
  image:
    "https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/11/product-15-min-312x180.jpg",
  category: "Fast Food",
  title: `Choco Meal ${i + 1}`,
  description: "Lorem ipsum dolor sit amet consectetur. Habitasse metus urna…",
  price: "$13 - $19",
  discount: 15,
}));

function Deals() {
  const [ref, isInView] = useInView();
  return (
    <div ref={ref} className="px-4 py-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h2
          className={`text-[36px] pb-[15px] mx-auto w-fit fade-up fade-delay-hadding ${
            isInView ? "in-view" : ""
          }`}
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 700 }}
        >
          Super Delicious Deal
        </h2>
        <p
          className={`text-[16px] mb-[15px] mx-auto max-w-xl fade-up fade-delay-p ${
            isInView ? "in-view" : ""
          }`}
          style={{ fontFamily: "'Quicksand', sans-serif" }}
        >
          Dolor sit amet consectetur. Massa a of est sit commodo convallis
          auctor aliquet ready works any more sem.
        </p>
      </div>

      {/* Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-up fade-delay-hadding ${
          isInView ? "in-view" : ""
        }`}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center mb-10">
        <button
          className="text-[#E9004B] text-[16px] p-3 border rounded-3xl w-35 mt-10 hover:bg-[#E9004B] hover:text-white transition-colors duration-700"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 700,
          }}
        >
          {" "}
          Show More
        </button>
      </div>
    </div>
  );
}

export default Deals;
