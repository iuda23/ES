import React, { useState } from "react";
import ProductManagement from "./ProductManagement";
import OrderManagement from "./OrderManagement";

export default function AdminDashboard({ products, addProduct, removeProduct, texts, exitAdmin }) {
  const [tab, setTab] = useState("products");

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Админ панель</h1>
        <button onClick={exitAdmin} className="text-red-500 hover:text-red-700">← Назад</button>
      </header>

      <div className="flex">
        <nav className="w-64 bg-white shadow-md min-h-screen p-4">
          <ul className="space-y-2">
            <li><button onClick={() => setTab("products")} className="w-full text-left p-2 hover:bg-gray-100">Управление товарами</button></li>
            <li><button onClick={() => setTab("orders")} className="w-full text-left p-2 hover:bg-gray-100">Заказы</button></li>
          </ul>
        </nav>

        <main className="flex-1 p-6">
          {tab === "products" && <ProductManagement products={products} addProduct={addProduct} removeProduct={removeProduct} />}
          {tab === "orders" && <OrderManagement />}
        </main>
      </div>
    </div>
  );
}