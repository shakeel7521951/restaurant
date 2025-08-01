import MenuCard from "./MenuCard";

const dinnerItems = [
  {
    id: 1,
    title: "Grilled Chicken Salad",
    image: "./menu/burger.jpg",
    originalPrice: "$20.00",
    discountedPrice: "$17.50",
  },
  {
    id: 2,
    title: "BBQ Beef Burger",
    image: "./menu/burger.jpg",
    originalPrice: "$22.00",
    discountedPrice: "$19.00",
  },
  {
    id: 3,
    title: "Creamy Mushroom Pasta",
    image: "./menu/burger.jpg",
    originalPrice: "$18.00",
    discountedPrice: "$15.00",
  }
];

const Dinner = () => {
  return (
    <div className="px-2 py-10">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-10">Dinner</h1>
      <MenuCard items={dinnerItems} />
    </div>
  );
};

export default Dinner;
