import React from "react";

export default function OrderManagement() {
  const orders = [
    { id: 1, customer: "Anna", phone: "+99365488388", total: "20 TMT", status: "Новый" },
    { id: 2, customer: "Bayram", phone: "+99365488388", total: "35 TMT", status: "Обработан" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Заказы</h2>
      <table className="min-w-full bg-white border rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th>ID</th>
            <th>Клиент</th>
            <th>Телефон</th>
            <th>Сумма</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-t">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">{order.phone}</td>
              <td className="px-4 py-2">{order.total}</td>
              <td className="px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}