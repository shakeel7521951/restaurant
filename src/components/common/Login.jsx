import React from 'react';
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaReact } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (

<div>
    {/* header section */}
     <section className="relative w-full h-[300px] md:h-[350px]">
          <img
            src="./menu/bread_banner-scaled.jpg"
            alt="Bread on a wooden table - Menu banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16">
            <h1 className="text-3xl md:text-6xl font-bold mb-2">My account</h1>
            <nav className="text-xl">
              <Link to="/" className="hover:underline hover:text-[#E9004B] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-[#E9004B] font-medium">My account</span>
            </nav>
          </div>
        </section>
        
        {/* Form section */}

    <div className="mx-auto w-full max-w-4xl mt-10 mb-10 sm:mt-20 sm:mb-20 bg-white rounded-3xl overflow-hidden px-6 py-10 sm:p-10 shadow-lg border border-gray-100">
  <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
    Sign In
  </h2>

  <form className="space-y-6" onSubmit={handleSubmit}>
    {/* Email */}
    <div className="space-y-1">
      <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-700">
        Username or email address *
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiOutlineMail className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
          placeholder="you@example.com"
        />
      </div>
    </div>

    {/* Password */}
    <div className="space-y-1">
      <label htmlFor="password" className="block text-base sm:text-lg font-medium text-gray-700">
        Password
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          required
          className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
          placeholder="••••••••"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <HiOutlineEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
          ) : (
            <HiOutlineEye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
          )}
        </button>
      </div>
    </div>

    {/* Options */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <label className="flex items-center gap-2 text-gray-600 text-sm">
        <input 
          type="checkbox" 
          className="rounded h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 transition" 
        />
        Remember me
      </label>
      <a href="#" className="text-sm font-medium text-[#E9004B] hover:text-[#c2003f] transition-colors">
        Forgot password?
      </a>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      disabled={isLoading}
      className={`w-full flex justify-center items-center py-3 px-4 sm:py-4 sm:px-5 border border-transparent rounded-lg shadow-sm text-base sm:text-lg font-medium text-white bg-[#E9004B] hover:bg-[#c2003f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-all duration-300 ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Signing in...
        </>
      ) : (
        'Sign in'
      )}
    </button>
  </form>
</div>
</div>
  );
};

export default Login;