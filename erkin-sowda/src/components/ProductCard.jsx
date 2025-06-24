import React from "react";

export default function ProductCard({ product, language, addToCart, currency, convertPrice }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-transform hover:scale-105">
      <img src={product.image} alt={product.name[language]} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-medium text-gray-800">{product.name[language]}</h3>
        <p className="text-green-600 font-bold mt-1">{convertPrice(product.priceUSD)} {currency}</p>
        <button onClick={addToCart} className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-colors">
          В корзину
        </button>
      </div>
    </div>
  );
}