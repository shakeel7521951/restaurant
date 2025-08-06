import MenuCard from "./MenuCard";

const breakfastItems = [
  {
    id: 1,
    title: "Chocolate Cream",
    image: "./menu/product-15-min.jpg",
     img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "19",
    discountedPrice: "17",
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia inventore possimus est quibusdam! Ipsum quam possimus sunt laborum corrupti omnis."
  },
  {
    id: 2,
    title: "Baked Pastries and Egg",
    image: "./menu/product-15-min.jpg",
     img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "21",
    discountedPrice: "18",
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia inventore possimus est quibusdam! Ipsum quam possimus sunt laborum corrupti omnis."
  },
  {
    id: 3,
    title: "Breakfast with Toasts",
    image: "./menu/product-15-min.jpg",
     img2:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    img3:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D",
    originalPrice: "15",
    discountedPrice: "13",
      desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia inventore possimus est quibusdam! Ipsum quam possimus sunt laborum corrupti omnis."
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
