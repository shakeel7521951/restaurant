import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { TbLibraryPlus } from "react-icons/tb";
import { TbCopyMinus } from "react-icons/tb";

const Navbar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const navitem = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Menu", path: "/menu" },
    { id: 3, name: "Blog", path: "/blogs" },
    { id: 4, name: "Team", path: "/team" },
    { id: 5, name: "About", path: "/about" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  const pageAry = [
    { id: 1, name: "Our Business", path: "/ourbusiness" },
    { id: 2, name: "FAQ", path: "/faq" },
  ];

  const [first, setfirst] = useState(false);
  const sidebarRef = useRef(null);

  const handlemenu = () => {
    setfirst(true);
  };

  const hanldecross = () => {
    setfirst(false);
    setExpandedMenu(null);
  };

  const toggleMenu = (id) => {
    if (expandedMenu === id) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(id);
    }
  };

  useEffect(() => {
    setActivePage(location.pathname);
    // Collapse About menu when any other page is clicked
    if (!location.pathname.startsWith('/about') && !location.pathname.startsWith('/ourbusiness') && !location.pathname.startsWith('/faq')) {
      setExpandedMenu(null);
    }
  }, [location]);

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
    <nav className="relative w-full bg-rose-50 px-2 sm:px-5 py-3 flex justify-between items-center shadow-sm">
      <div>
        <div>
          <Link to="/">
            <img src="/Navbar/logo.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="hidden xl:block">
        <ul className="flex gap-2 xl:gap-10 font-semibold text-md">
          {navitem.map((nav) => (
            <li key={nav.id} className="group relative">
              <div className="flex items-center gap-1">
                <Link to={nav.path}>
                  <span className={`hover:text-rose-400 transition ${activePage === nav.path ? 'text-rose-400' : ''}`}>
                    {nav.name}
                  </span>
                </Link>
                {(nav.name === "About") && (
                  <IoIosArrowDown className="text-xs" />
                )}
              </div>
              
              <div className={`absolute -bottom-1 left-1/2 h-[2px] bg-rose-400 transition-all duration-300 transform -translate-x-1/2 ${activePage === nav.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              
              {nav.name === "About" && (
                <div className="absolute top-full left-0 z-50 px-5 py-3 text-black shadow-sm bg-white hidden group-hover:block rounded-md">
                  <ul className="whitespace-nowrap space-y-2">
                    {pageAry.map((item) => (
                      <li key={item.id} className="text-sm hover:underline text-black">
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
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
        <Link to="/cart">
          <div className="btn group">
            <span>
              <BsCart2 className="text-rose-400 group-hover:text-white" />
            </span>
          </div>
        </Link>
        
        <Link to="/login">
          <div className="btn group">
            <span>
              <HiMiniUserPlus className="text-rose-400 group-hover:text-white" />
            </span>
          </div>
        </Link>

        <div className="hidden xl:block">
          <Link to="/reservation">
            <div className="btn">
              <MdOutlineCalendarToday />
              Reservation
            </div>
          </Link>
        </div>
        <div className="cursor-pointer xl:hidden">
          <span onClick={handlemenu}>
            <HiMenuAlt3 className="text-2xl" />
          </span>
        </div>
      </div>

      {/* Mobile Section */}
      {first && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={hanldecross}
          />
          
          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className="fixed xl:hidden z-50 border-r border-gray-200 top-0 min-h-screen p-5 w-full sm:w-[45%] shadow-md bg-white left-0 overflow-y-auto"
          >
            <div className="flex items-center justify-between gap-4">
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
                {navitem.map((nav) => (
                  <li key={nav.id} className="mb-4">
                    <div className="flex justify-between items-center">
                      <Link 
                        to={nav.path} 
                        className={`hover:text-rose-400 transition ${activePage === nav.path ? 'text-rose-400' : ''}`}
                        onClick={() => {
                          setActivePage(nav.path);
                          setfirst(false);
                          if (nav.name !== "About") {
                            setExpandedMenu(null);
                          }
                        }}
                      >
                        {nav.name}
                      </Link>
                      
                      {(nav.name === "About") && (
                        <button onClick={() => toggleMenu(nav.id)}>
                          {expandedMenu === nav.id ? (
                            <TbCopyMinus className="text-xl text-rose-600" />
                          ) : (
                            <TbLibraryPlus className="text-xl text-rose-600" />
                          )}
                        </button>
                      )}
                    </div>

                    {/* Pages dropdown in mobile */}
                    {nav.name === "About" && expandedMenu === nav.id && (
                      <div className="ml-4 mt-2">
                        <ul className="space-y-2">
                          {pageAry.map((item) => (
                            <li key={item.id}>
                              <Link 
                                to={item.path} 
                                className="text-sm hover:underline text-black"
                                onClick={() => {
                                  setActivePage(item.path);
                                  setfirst(false);
                                }}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
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
        </>
      )}
    </nav>
  );
};

export default Navbar;