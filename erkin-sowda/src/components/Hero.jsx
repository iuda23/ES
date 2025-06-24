import React from "react";

export default function Hero({ title, subtitle, buttonText }) {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
            <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors">
              {buttonText}
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="https://placehold.co/600x300?text=New+Arrivals" alt="Banner" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}