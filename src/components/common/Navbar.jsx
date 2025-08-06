import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GiScooter } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import { HiMiniUserPlus } from "react-icons/hi2";
import { MdOutlineCalendarToday } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { PiPhoneCallLight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const navitem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Menu", path: "/menu" },
    { id: 3, name: "Shop", path: "/shop" },
    { id: 4, name: "Pages", path: "/pages" },
    { id: 5, name: "Blog", path: "/blog" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  const [first, setfirst] = useState(false);
  const sidebarRef = useRef(null); // ✅ useRef for sidebar

  const handlemenu = () => {
    setfirst(true);
  };

  const hanldecross = () => {
    setfirst(false);
  };

  useEffect(() => {
    const handleClickoutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setfirst(false);
      }
    };

    if (first) {
      document.addEventListener("mousedown", handleClickoutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickoutside);
    };
  }, [first]);

  return (
    <nav className="relative w-full bg-rose-50 px-2 sm:px-5 py-3 flex justify-between items-center shadow-sm ">
      <div>
        <div>
          <Link>
            <img src="/Navbar/logo.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="hidden xl:block">
        <ul className="flex gap-2 xl:gap-10 font-semibold text-md">
          {navitem.map((nav, id) => (
            <Link >
              {" "}
              <li
                key={nav.id}
                className="flex gap-2 group relative list-none items-center"
              >
                <Link to={nav.path}>
                  <span className="hover:text-rose-400 transition">
                    {nav.name}
                  </span>
                </Link>

                {/* Underline animation */}
                <div className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-rose-400 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2 xl:gap-4">
        <div className="flex xl:flex items-center hidden xl:block justify-center gap-5 m-4">
          <div>
            <span>
              <GiScooter className="text-3xl text-rose-500" />
            </span>
          </div>
          <div>
            <p className="text-xs">Call And Order In</p>
            <h1 className="text-lg font-semibold">+92-1243-4567</h1>
          </div>
        </div>
     
          <div className="btn  group">
          <span>
            <BsCart2 className="text-rose-400 group-hover:text-white" />
          </span>
          
        </div>
     
     
        <div className="btn group ">
          <span>
            <HiMiniUserPlus className="text-rose-400 group-hover:text-white" />
          </span>
        </div>
        <div className="hidden xl:block">
            <div className="btn  ">
          <MdOutlineCalendarToday />
          Reservation
        </div>
        </div>
        <div className="cursor-pointer xl:hidden">
          <span onClick={handlemenu}>
            <HiMenuAlt3 className="text-2xl" />
          </span>
        </div>
      </div>

      {/* <!-- ========== Start mobile  Section ========== --> */}
      {first && (
        <div
          ref={sidebarRef} // ✅ useRef attached
          className="absolute xl:hidden z-10 border-r border-gray-200 top-0 min-h-screen p-5 w-full sm:w-[45%] shadow-md bg-white left-0 fixed overflow-y-auto"
        >
          <div className="flex items-center justify-between gap-4 ">
            <div>
              <img src="/Navbar/logo.svg" alt="" />
            </div>
            <div
              className="p-1 border border-rose-500 bg-rose-500 text-white font-semibold rounded-full"
              onClick={hanldecross}
            >
              <RxCross2 className="text-2xl font-bold" />
            </div>
          </div>
          <div className="mt-10">
            <ul className="font-semibold items-center list-none group relative">
               {navitem.map((nav, id) => (
            <Link to={nav.path}>
              {" "}
              <li
                key={nav.id}
                className="flex gap-2 group relative list-none items-center"
              >
                <Link>
                  <span className="hover:text-rose-400 transition">
                    {nav.name}
                  </span>
                </Link>

                {/* Underline animation */}
                <div className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-rose-400 group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></div>
              </li>
            </Link>
          ))}
            </ul>
          </div>
          <div className="mt-10">
            <h1 className="font-semibold text-3xl mb-5">Contact Info</h1>
            <div>
              <p className="flex gap-2 items-center">
                <PiPhoneCallLight />
                <span>+92-123-4567</span>
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <Link>
                <div className="p-2 rounded-full shadow-sm">
                  <FaFacebookF />
                </div>
              </Link>
              <Link>
                <div className="p-2 rounded-full shadow-sm">
                  <FaXTwitter />
                </div>
              </Link>
              <Link>
                <div className="p-2 rounded-full shadow-sm">
                  <FaLinkedinIn />
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* <!-- ========== End mobile  Section ========== --> */}
    </nav>
  );
};

export default Navbar;
