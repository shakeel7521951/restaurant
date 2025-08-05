import React from 'react';
import { Link } from "react-router-dom";

const Not_Found = () => {
  return (
    <div>
      {/* Hero section */}
         <section className="relative w-full h-[300px] md:h-[350px]">
              <img
                src="./menu/bread_banner-scaled.jpg"
                alt="Bread on a wooden table - Menu banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
                <h1 className="text-3xl md:text-6xl font-bold mb-2">Error Page</h1>
                <nav className="text-xl">
                  <Link to="/" className="hover:underline hover:text-[#E9004B] transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span className="text-[#E9004B] font-medium">404</span>
                </nav>
              </div>
            </section>
            {/* Picture & Text section */}
    <div className="flex flex-col items-center mx-auto max-w-7xl text-center px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      <img
        src="/notfound/notfound.png"
        alt="error"
        className="mb-6 w-full max-w-5xl"
      />

      <h2 className="text-3xl sm:text-4xl font-bold mb-5">
        Oops! Looks like you're lost
      </h2>

      <p className="text-gray-800 text-base sm:text-lg mb-6">
        Either something went wrong or the page doesn't exist anymore.
      </p>

      <button className="px-8 py-3 text-sm font-medium text-[#E9004B] border border-pink-400 rounded-full hover:bg-[#c2003f] hover:text-white transition">
        Back To Home
      </button>
    </div>
    </div>
  );
};

export default Not_Found;
