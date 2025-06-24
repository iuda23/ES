import React from "react";

export default function CategoryFilter({ activeCategory, setActiveCategory, categories }) {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Категории</h2>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setActiveCategory("all")} className={`px-4 py-2 rounded-full ${activeCategory === "all" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors`}>
            {categories.all}
          </button>
          <button onClick={() => setActiveCategory("food")} className={`px-4 py-2 rounded-full ${activeCategory === "food" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors`}>
            {categories.food}
          </button>
          <button onClick={() => setActiveCategory("household")} className={`px-4 py-2 rounded-full ${activeCategory === "household" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors`}>
            {categories.household}
          </button>
          <button onClick={() => setActiveCategory("cosmetics")} className={`px-4 py-2 rounded-full ${activeCategory === "cosmetics" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors`}>
            {categories.cosmetics}
          </button>
          <button onClick={() => setActiveCategory("baby")} className={`px-4 py-2 rounded-full ${activeCategory === "baby" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} transition-colors`}>
            {categories.baby}
          </button>
        </div>
      </div>
    </section>
  );
}