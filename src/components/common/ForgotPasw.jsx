import React, { useState } from 'react';
import { HiOutlineLockClosed, HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    // Simulate backend API call
    setTimeout(() => {
      setIsLoading(false);
      setMessage('Your password has been successfully updated!');
      setNewPassword('');
      setConfirmPassword('');
    }, 2000);
  };

  return (
    <div className='bg-gradient-to-br from-rose-500 to-rose-300 flex justify-center items-center w-full min-h-screen'>
      <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden px-6 py-10 sm:p-10 shadow-lg border border-gray-100">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Reset Password
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="space-y-1">
            <label htmlFor="newPassword" className="block text-base sm:text-lg font-medium text-gray-700">
              New Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
              Confirm Password
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineLockClosed className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder-gray-400 transition-all duration-200 text-sm sm:text-base"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Messages */}
          {error && (
            <p className="text-red-600 text-sm font-medium -mt-2">{error}</p>
          )}
          {message && (
            <p className="text-green-600 text-sm font-medium -mt-2">{message}</p>
          )}

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
                Processing...
              </>
            ) : (
              'Reset Password'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
