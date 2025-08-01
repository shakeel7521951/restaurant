import MenuCard from "./MenuCard";

const lunchItems = [
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
  },
  {
    id: 4,
    title: "Spicy Tandoori Wrap",
    image: "./menu/burger.jpg",
    originalPrice: "$16.00",
    discountedPrice: "$13.50",
  },
  {
    id: 5,
    title: "Classic Caesar Salad",
    image: "./menu/burger.jpg",
    originalPrice: "$14.00",
    discountedPrice: "$11.00",
  },
  {
    id: 6,
    title: "Loaded Veggie Sandwich",
    image: "./menu/burger.jpg",
    originalPrice: "$17.00",
    discountedPrice: "$14.00",
  },
];

const Lunch = () => {
  return (
    <div className="px-2 py-10">
      <h1 className="text-3xl md:text-5xl text-center font-bold mb-10">Lunch</h1>
      <MenuCard items={lunchItems} />
    </div>
  );
};

export default Lunch;
