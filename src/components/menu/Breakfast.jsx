import MenuCard from "./MenuCard";

const breakfastItems = [
  {
    id: 1,
    title: "Chocolate Cream",
    image: "./menu/product-15-min.jpg",
    originalPrice: "$19.00",
    discountedPrice: "$17.00",
  },
  {
    id: 2,
    title: "Strawberry Pancake",
    image: "./menu/product-15-min.jpg",
    originalPrice: "$21.00",
    discountedPrice: "$18.00",
  },
  {
    id: 3,
    title: "Omelette Cheese",
    image: "./menu/product-15-min.jpg",
    originalPrice: "$15.00",
    discountedPrice: "$13.00",
  },
];

const Breakfast = () => {
  return (
    <div className="px-2 py-10">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-10">Breakfast</h1>
      <MenuCard items={breakfastItems} />
    </div>
  );
};

export default Breakfast;
