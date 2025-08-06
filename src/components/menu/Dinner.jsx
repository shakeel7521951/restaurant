import MenuCard from "./MenuCard";

const dinnerItems = [
  {
    id: 1,
    title: "Grilled Chicken Salad",
    image: "./menu/burger.jpg",
     img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "20",
    discountedPrice: "17",
  },
  {
    id: 2,
    title: "BBQ Beef Burger",
    image: "./menu/burger.jpg",
     img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "22",
    discountedPrice: "19",
  },
  {
    id: 3,
    title: "Creamy Mushroom Pasta",
    image: "./menu/burger.jpg",
     img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "18",
    discountedPrice: "15",
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
