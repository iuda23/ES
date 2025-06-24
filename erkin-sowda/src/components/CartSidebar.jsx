import React, { useState } from "react";

export default function CartSidebar({ isOpen, onClose, cart, language, removeFromCart, districtLabels, currency, exchangeRate }) {
  const totalPriceTMT = cart.reduce((sum, item) => sum + item.priceUSD * exchangeRate, 0).toFixed(2);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-md h-full p-6 shadow-lg overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Корзина</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b pb-2">
                  <span>{item.name[language]}</span>
                  <span className="font-semibold">{(item.priceUSD * 3.5).toFixed(2)} {currency}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">X</button>
                </li>
              ))}
            </ul>
            <form className="mt-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input type="tel" className="w-full border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Район доставки</label>
                <select className="w-full border border-gray-300 rounded px-3 py-2">
                  {Object.keys(districtLabels).map((district, index) => (
                    <option key={index}>{district}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <p className="text-right">Итого: <span className="font-semibold">{totalPriceTMT} {currency}</span></p>
              </div>
              <button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-colors">
                Оформить заказ
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}