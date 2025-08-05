const Newsletter = () => {
  return (
    <div className="bg-orange-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Get the latest recipes, cooking tips, and special offers delivered straight to your inbox.
        </p>
        <div className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter