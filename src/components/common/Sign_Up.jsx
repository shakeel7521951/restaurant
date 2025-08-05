import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";

const Sign_Up = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsSubmitting(true);
    // Simulate signup delay
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
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
    <div className="mx-auto w-full max-w-4xl mt-10 mb-10 sm:mt-20 sm:mb-20 bg-white rounded-3xl overflow-hidden px-6 py-10 sm:p-10 shadow-lg border border-gray-100">
      <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Create an Account
      </h2>

      <form className="space-y-6" onSubmit={handleSignup}>
        {/* Full Name */}
        <div className="space-y-1">
          <label htmlFor="fullname" className="block text-base sm:text-lg font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-700">
            Email Address *
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label htmlFor="password" className="block text-base sm:text-lg font-medium text-gray-700">
            Password *
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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

        {/* Confirm Password */}
        <div className="space-y-1">
          <label htmlFor="confirmPassword" className="block text-base sm:text-lg font-medium text-gray-700">
            Confirm Password *
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
              placeholder="••••••••"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <HiOutlineEyeOff className="h-5 w-5 text-gray-400 hover:text-gray-500" />
              ) : (
                <HiOutlineEye className="h-5 w-5 text-gray-400 hover:text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-2">
          <input 
            type="checkbox" 
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
            className="mt-1 h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
          />
          <p className="text-sm text-gray-600">
            I agree to the <a href="#" className="text-[#E9004B] hover:text-[#c2003f] font-medium">Terms and Conditions</a>.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center items-center py-3 px-4 sm:py-4 sm:px-5 border border-transparent rounded-lg shadow-sm text-base sm:text-lg font-medium text-white bg-[#E9004B] hover:bg-[#c2003f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition-all duration-300 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating account...
            </>
          ) : (
            'Sign up'
          )}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Sign_Up;
