import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Reservation() {
  return (
    <>
    {/* Hero section */}
         <section className="relative w-full h-[300px] md:h-[350px]">
              <img
                src="./menu/bread_banner-scaled.jpg"
                alt="Bread on a wooden table - Menu banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
                <h1 className="text-3xl md:text-6xl font-bold mb-2">Reservation</h1>
                <nav className="text-xl">
                  <Link to="/" className="hover:underline hover:text-[#E9004B] transition-colors">Home</Link>
                  <span className="mx-2">/</span>
                  <span className="text-[#E9004B] font-medium">Reservation</span>
                </nav>
              </div>
            </section>
    <div className="bg-white">
      {/* Header Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Reservation</h2>
        <p className="text-gray-800 text-base sm:text-lg">
          Reserve your table now and enjoy a delightful dining experience with us.
        </p>
      </div>

      {/* Form Section */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-10">
        <div className="w-full max-w-4xl border border-pink-400 p-6 sm:p-8 rounded-lg shadow-md">
          <form className="space-y-6">
            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-800">
                    Start Time
                  </label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-800">
                    End Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
              </div>
            </div>

            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-800">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                  <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#E9004B] hover:bg-[#c2003f] text-white px-6 py-2 rounded-md"
              >
                REQUEST BOOKING
              </button>
              <button
                type="button"
                className="w-full sm:w-auto bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-gray-400"
              >
                REQUEST CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
