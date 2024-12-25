import React from 'react';
import Footer from "../components/Footer";

function Delivery() {
  return (
    <div className="bg-[#E2F1E7] min-h-screen flex flex-col pt-10 fade-in-up">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full mx-auto flex-grow">
        <h1 className="text-4xl font-semibold text-center text-[#1A3636] mb-6">
          Delivery Information
        </h1>

        <div className="space-y-6 fade-in-up">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">🌱</span>
            </div>
            <div className="text-lg text-gray-700">
              <h3 className="font-semibold">Fast Delivery</h3>
              <p>We deliver your plants with care to ensure they reach you fresh and healthy!</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">🚚</span>
            </div>
            <div className="text-lg text-gray-700">
              <h3 className="font-semibold">Nationwide Shipping</h3>
              <p>We ship all over the country with reliable delivery services.</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">🌍</span>
            </div>
            <div className="text-lg text-gray-700">
              <h3 className="font-semibold">Eco-Friendly Packaging</h3>
              <p>Our packaging is made from eco-friendly materials to reduce waste and protect your plants.</p>
            </div>
          </div>

          <div className="text-center bg-[#1A3636] p-4 rounded-md">
            <h2 className="text-2xl font-semibold text-white mb-4">Track Your Order</h2>
            <p className="text-white">Use the tracking number to track your plant’s journey from our nursery to your doorstep.</p>
            <button className="mt-4 py-2 px-8 bg-[#E2F1E7] text-[#1A3636] border-none font-semibold rounded-3xl shadow-md hover:bg-[#234949] focus:outline-none focus:ring-2 hover:text-white">
              Track Order
            </button>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Delivery;
