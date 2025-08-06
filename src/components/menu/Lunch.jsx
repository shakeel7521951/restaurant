import MenuCard from "./MenuCard";

const lunchItems = [
  {
    id: 1,
    title: "Grilled Chicken Salad",
    image: "./menu/burger.jpg",
    img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "20  ",
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
  },
  {
    id: 4,
    title: "Spicy Tandoori Wrap",
    image: "./menu/burger.jpg",
     img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "16",
    discountedPrice: "13",
  },
  {
    id: 5,
    title: "Classic Caesar Salad",
    image: "./menu/burger.jpg",
     img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "14",
    discountedPrice: "11",
  },
  {
    id: 6,
    title: "Loaded Veggie Sandwich",
    image: "./menu/burger.jpg",
     img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "17",
    discountedPrice: "14",
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
