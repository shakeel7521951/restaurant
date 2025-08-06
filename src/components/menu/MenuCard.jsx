import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const MenuCard = ({ items }) => {
  const [overlay, setOverlay] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [value, setValue] = useState(1);
  const [productprice, setProductPrice] = useState(0);
  const [addonsprice, setAddonPrice] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const AddonsAry = [
    { id: 1, name: "cheese", price: "5" },
    { id: 2, name: "smokec salmon", price: "10" },
    { id: 3, name: "Avocado Slices", price: "15" },
    { id: 4, name: "crispy Bacon", price: "20" },
    { id: 5, name: "sauted Mushrooms", price: "25" },
    { id: 6, name: "Hurb Butter", price: "30" },
  ];

  const showDiv = (item) => {
    setSelectedItem(item);
    setMainImg(item.image);
    setValue(1);

    const initialProductPrice = Number(selectedItem.discountedPrice);
    setProductPrice(initialProductPrice);
    setAddonPrice(0);
    setTotalPrice(initialProductPrice);
    setSelectedAddons([]);
    setOverlay(true);
  };

  const Increfunc = () => {
    const newValue = value + 1;
    const unitPrice = Number(selectedItem.discountedPrice);
    const newProductPrice = unitPrice * newValue;
    setValue(newValue);
    setProductPrice(newProductPrice);
    setTotalPrice(newProductPrice + addonsprice);
  };

  const Decrfunc = () => {
    if (value > 1) {
      const newValue = value - 1;
      const unitPrice = Number(selectedItem.discountedPrice);
      const newProductPrice = unitPrice * newValue;
      setValue(newValue);
      setProductPrice(newProductPrice);
      setTotalPrice(newProductPrice + addonsprice);
    }
  };

  const handleAddonChange = (e, addon) => {
    let updatedAddons = [...selectedAddons];

    if (e.target.checked) {
      updatedAddons.push(addon);
    } else {
      updatedAddons = updatedAddons.filter((a) => a.id !== addon.id);
    }

    const newAddonTotal = updatedAddons.reduce(
      (acc, cur) => acc + Number(cur.price),
      0
    );
    setSelectedAddons(updatedAddons);
    setAddonPrice(newAddonTotal);
    setTotalPrice(productprice + newAddonTotal);
  };

  return (
    <div className="relative flex flex-wrap justify-center gap-6">
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
                onClick={() => showDiv(item)}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
              />
            </div>

            <div className="md:w-1/2 px-3 text-center md:text-left">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <h3 className="text-lg mb-4">
                <span className="line-through text-gray-400 mr-2">
                  {item.originalPrice}$
                </span>
                <span className="text-[#E9004B] font-bold">
                  {item.discountedPrice}$
                </span>
              </h3>
              <button className="mt-2 px-6 py-2 border-2 text-[#E9004B] border-[#E9004B] hover:bg-[#E9004B] hover:text-white rounded-full transition-colors duration-200">
                Order Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {overlay && selectedItem && (
        <div className="w-full h-full fixed top-0 z-10 left-0">
          <div className="w-full relative h-full bg-black/40"></div>
          <div className="w-[80%] max-h-[90vh] overflow-y-scroll mx-auto border absolute top-2 left-1/2 transform -translate-x-1/2 bg-white z-50 rounded-lg shadow-xl">
            <div className="absolute top-3 right-5">
              <RxCross1
                className="text-xl cursor-pointer"
                onClick={() => setOverlay(false)}
              />
            </div>
            <div className="p-3">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Section - Images */}
                <div className="flex flex-col w-full gap-5 p-3">
                  <div className="relative overflow-hidden w-full h-72 md:h-96 lg:h-full">
                    <img
                      src={mainImg}
                      alt="main"
                      className="w-full h-full object-cover rounded-md transition duration-300"
                    />
                    <div className="absolute top-0 left-0 bg-rose-500 text-white px-3 py-1 text-sm font-semibold rounded-br-md">
                      Sale!
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <img
                      src={selectedItem.image}
                      alt="img2"
                      className="w-20 h-20 object-cover rounded-md hover:opacity-70 transition cursor-pointer"
                      onClick={() => setMainImg(selectedItem.image)}
                    />
                    <img
                      src={selectedItem.img2}
                      alt="img2"
                      className="w-20 h-20 object-cover rounded-md hover:opacity-70 transition cursor-pointer"
                      onClick={() => setMainImg(selectedItem.img2)}
                    />
                    <img className="w-20 h-20 object-cover rounded-md hover:opacity-70 transition cursor-pointer" src={selectedItem.img3} alt="img2" 
                    onClick={() => setMainImg(selectedItem.img3)}
                    />
                  </div>
                </div>

                {/* Right Section - Details */}
                <div className="w-full p-5">
                  <h1 className="text-4xl font-bold mb-2 font-mono">
                    {selectedItem.title}
                  </h1>
                  <p className="text-sm font-semibold text-rose-500 mb-4">
                    <span className="line-through text-gray-400 mr-2">
                      {selectedItem.originalPrice}$
                    </span>
                    {selectedItem.discountedPrice}$
                  </p>
                  <p className="text-sm mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, dolor?
                  </p>

                  <div className="p-5 border border-gray-300 rounded-sm mb-5">
                    <h1>Addons</h1>
                    <div className="grid grid-cols-3 mt-5 gap-8 text-sm">
                      {AddonsAry.map((item) => (
                        <div key={item.id} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            onChange={(e) => handleAddonChange(e, item)}
                          />
                          <div className="flex gap-2 text-xs whitespace-nowrap">
                            <p>{item.name}</p>
                            <p>{item.price}$</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="border rounded-md flex items-center gap-4 px-4 py-2 border-gray-300">
                      <span className="text-lg font-medium">{value}</span>
                      <div className="flex flex-col text-xl text-gray-600">
                        <IoMdArrowDropup
                          onClick={Increfunc}
                          className="cursor-pointer hover:text-rose-500"
                        />
                        <MdOutlineArrowDropDown
                          onClick={Decrfunc}
                          className="cursor-pointer hover:text-rose-500"
                        />
                      </div>
                    </div>
                    <Link>
                      <button className="bg-rose-500 text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-rose-500 transition"
                      onClick={()=>setOverlay(false)}
                      >
                        Add to Cart
                      </button>
                    </Link>
                  </div>

                  <div className="flex text-sm flex-col gap-5">
                    <div className="flex justify-between">
                      <span className="font-semibold">Product Total:</span>
                      <span>{productprice}$</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Addons Total:</span>
                      <span>{addonsprice}$</span>
                    </div>
                    <hr className="text-gray-400" />
                    <div className="flex text-xl justify-between">
                      <span className="font-semibold">Total:</span>
                      <span>{totalprice}$</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
