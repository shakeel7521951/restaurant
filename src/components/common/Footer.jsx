import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegramPlane, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const FootrAry=[
  {id:1,name:"Career",path:"/about"},
  {id:2,name:"Teams",path:"/team"},
  {id:3,name:"Foodymat Area",path:"/"},
  {id:4,name:"Foodymat Instamat",path:"/team"},
  {id:5,name:"Foodymat Genie",path:"/about"},
]

const Footer = () => {
  return (
    <div className="bg-black text-white pt-20 px-5 md:px-10">
      <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
        {/* Logo & Contact */}
        <div className="">
          <div className=""><img src="/Navbar/logo.svg" alt="logo" className="w-32 bg-transparent text-red-400 mb-4" /></div>
          <p className="text-xs text-gray-300 mb-5">
            dolor sit amet consectetur. Massa est sit comm convallis.
          </p>
          <div className="flex gap-2 items-center mb-2 text-sm text-gray-200">
            <LuPhoneCall className="text-lg" />
            <span>+92-123-4567</span>
          </div>
          <div className="flex gap-2 items-center text-sm text-gray-300">
            <HiOutlineMail className="text-lg" />
            <span>infoyour@gmail.com</span>
          </div>
        </div>

        {/* Opening Hours & Address */}
        <div className="pr-5">
          <h1 className="font-semibold mb-6 text-lg">Opening Hours</h1>
          {["Mon-Fri", "Saturday", "Sunday"].map((day, index) => (
            <div
              key={index}
              className="text-sm text-gray-300 border-b border-gray-700 py-3 flex justify-between"
            >
              <span>{day}</span>
              <span>08.00 - 12.00</span>
            </div>
          ))}
          <h1 className="mt-8 mb-3 font-semibold text-lg">Our Address</h1>
          <p className="text-sm text-gray-300">
            Pizzeria Head Office 54866 2nd Road NY 48766 New York, U.S.A
          </p>
        </div>

        {/* Company Info Links */}
        <div className="ml-2">
          <h1 className="mb-10 font-semibold text-lg">Company Info</h1>
          <ul className="space-y-3">
          { FootrAry.map(
              (item, id) => (
                <li key={item.id} className="text-sm text-gray-300 hover:text-white transition">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h1 className="font-semibold mb-4 text-lg">Subscribe Now</h1>
          <p className="text-sm text-gray-300 mb-6">
            Subscribe now for our new updates and get regular offers and stuff.
          </p>
          <div className="flex rounded-md overflow-hidden border border-gray-600 bg-black">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-3 py-3 bg-transparent text-sm text-white focus:outline-none"
            />
            <button className="relative bg-white  text-rose-500 hover:bg-rose-500 group hover:text-white cursor-pointer duration-300 transition  px-6 flex items-center justify-center">
              <FaTelegramPlane className="w-full text-xl transform group-hover:translate-x-6 group-hover:-translate-y-7 " />
              <FaTelegramPlane className="absolute text-xl transform text-white -translate-x-5 translate-y-4  group-hover:translate-0  transition duration-300 " />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 pb-2 border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© 2024 Foodymat by RadiusTheme.</p>
        <div className="flex items-center gap-4">
          <span>Follow Social:</span>
          <div className="flex gap-3">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
              <Link key={i} to="#">
                <div className="p-2 rounded-full bg-gray-800 hover:bg-rose-500 transition text-white">
                  <Icon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
