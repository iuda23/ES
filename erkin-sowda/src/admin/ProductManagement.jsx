import React, { useState } from "react";

export default function ProductManagement({ products, addProduct, removeProduct }) {
  const [nameTM, setNameTM] = useState("");
  const [nameRU, setNameRU] = useState("");
  const [nameEN, setNameEN] = useState("");
  const [priceUSD, setPriceUSD] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("food");

  const handleAdd = () => {
    const newId = Date.now();
    addProduct({
      id: newId,
      name: { tm: nameTM, ru: nameRU, en: nameEN },
      priceUSD: parseFloat(priceUSD),
      image,
      category
    });
    setNameTM(""); setNameRU(""); setNameEN(""); setPriceUSD(""); setImage("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Добавить товар</h2>
      <div className="mb-4 space-y-4">
        <div><input value={nameTM} onChange={e => setNameTM(e.target.value)} placeholder="Türkmençe ady" /></div>
        <div><input value={nameRU} onChange={e => setNameRU(e.target.value)} placeholder="Русское название" /></div>
        <div><input value={nameEN} onChange={e => setNameEN(e.target.value)} placeholder="English name" /></div>
        <div><input type="number" value={priceUSD} onChange={e => setPriceUSD(e.target.value)} placeholder="Цена USD" /></div>
        <div><input value={image} onChange={e => setImage(e.target.value)} placeholder="URL изображения" /></div>
        <div>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="food">Еда</option>
            <option value="household">Хозяйство</option>
            <option value="cosmetics">Косметика</option>
            <option value="baby">Детские</option>
          </select>
        </div>
        <button onClick={handleAdd} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Добавить</button>
      </div>

      <div className="mt-6">
        <h3 className="font-bold mb-2">Список товаров</h3>
        <ul className="space-y-2">
          {products.map(p => (
            <li key={p.id} className="flex justify-between p-2 border rounded">
              <span>{p.name.tm || p.name.ru || p.name.en}</span>
              <button onClick={() => removeProduct(p.id)} className="text-red-500">Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}