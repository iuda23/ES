import React from "react";

export default function Header({ 
  language, setLanguage, cartCount, openCart, toggleAdmin, adminButtonLabel 
}) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Erkin Sowda Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-semibold text-gray-800">Erkin Söwda</span>
        </div>

        <div className="hidden md:flex flex-grow max-w-md mx-4">
          <input type="text" placeholder="Поиск..." className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none" />
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 rounded-r-lg transition-colors">Найти</button>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={openCart} className="p-2 rounded-full hover:bg-gray-100 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.74a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-white border border-gray-300 rounded px-3 py-1 text-sm">
            <option value="tm">🇹🇲 TM</option>
            <option value="ru">🇷🇺 RU</option>
            <option value="en">🇬🇧 EN</option>
          </select>

          <button onClick={toggleAdmin} className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded">
            {adminButtonLabel}
          </button>
        </div>
      </div>
    </header>
  );
}