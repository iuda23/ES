import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import ProductCard from "./components/ProductCard";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import AdminDashboard from "./admin/AdminDashboard";

export default function App() {
  const [language, setLanguage] = useState("tm");
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  // Логин и пароль для админки (временный вариант)
  const validPassword = "admin123";

  // Курс конвертации USD -> TMT
  const exchangeRate = 3.5;

  // Районы Ашхабада + стоимость доставки
  const districts = {
    tm: {
      "Bagtyýarlyk": 5,
      "Haňgary": 5,
      "Arçabil": 7,
      "Sahel": 7,
      "Bereket": 5,
      "Niyazbek": 5,
      "Garaagac": 10,
      "Mongol": 10,
      "Ýunusalý": 5,
      "Çandyр": 5,
    },
    ru: {
      "Багтыярлык": 5,
      "Хангары": 5,
      "Арчабил": 7,
      "Сахел": 7,
      "Берекет": 5,
      "Ниязбек": 5,
      "Гараагач": 10,
      "Монгол": 10,
      "Юнусалы": 5,
      "Чандыр": 5,
    },
    en: {
      "Bagtyyarlik": 5,
      "Khangary": 7,
      "Archabil": 7,
      "Sahel": 5,
      "Bereket": 5,
      "Niyazbek": 5,
      "Garaagac": 10,
      "Mongol": 10,
      "Yunusaly": 5,
      "Chandy": 5,
    },
  };

  // Продуктлар
  const initialProducts = [
    {
      id: 1,
      name: {
        tm: "Organik Älçiler",
        ru: "Органические яблоки",
        en: "Organic Apples",
      },
      category: "food",
      priceUSD: 2.99,
      image: "https://placehold.co/300x300?text=Apples",
    },
    {
      id: 2,
      name: {
        tm: "Süt (Topar)",
        ru: "Молоко (Пастеризованное)",
        en: "Whole Milk",
      },
      category: "food",
      priceUSD: 1.49,
      image: "https://placehold.co/300x300?text=Milk",
    },
    {
      id: 3,
      name: {
        tm: "Kir ýuyýan toz",
        ru: "Стиральный порошок",
        en: "Laundry Detergent",
      },
      category: "household",
      priceUSD: 7.99,
      image: "https://placehold.co/300x300?text=Detergent",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  // Перевести цену в TMT
  const convertToTMT = (price) => (price * exchangeRate).toFixed(2);

  // Фильтрация продуктов
  const filteredProducts = products.filter(
    (product) =>
      (activeCategory === "all" || product.category === activeCategory) &&
      product.name[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Тексты на разных языках
  const texts = {
    tm: {
      searchPlaceholder: "Näme gerek?",
      heroTitle: "Taze mallar sizin eshigiziň öňünde!",
      heroSub: "Alyşyňyzy we ýurdyňyz üçin zatlar tiz teslim edilýär.",
      startShopping: "Satyn almany başla",
      categories: "Kategoriýalar",
      all: "Ählisi",
      food: "Dürler",
      household: "Ýurt işleri",
      cosmetics: "Kosmetika",
      baby: "Bala önümleri",
      cart: "Sebet",
      checkout: "Töleg etmek",
      emptyCart: "Sebetsiz",
      total: "Jemi",
      footerText: "© 2025 Erkin Söwda. All right reserved.",
      enterAdmin: "Admin girizgi",
      adminPanel: "Admin panel",
    },
    ru: {
      searchPlaceholder: "Что ищете?",
      heroTitle: "Свежие товары у ваших дверей!",
      heroSub: "Покупка продуктов и товаров для дома с быстрой доставкой.",
      startShopping: "Начать покупки",
      categories: "Категории",
      all: "Все",
      food: "Продукты",
      household: "Хозяйственные товары",
      cosmetics: "Косметика",
      baby: "Детские товары",
      cart: "Корзина",
      checkout: "Оформить заказ",
      emptyCart: "Корзина пуста",
      total: "Итого",
      footerText: "© 2025 Erkin Söwda. Все права защищены.",
      enterAdmin: "Вход в админку",
      adminPanel: "Админ панель",
    },
    en: {
      searchPlaceholder: "What are you looking for?",
      heroTitle: "Fresh Products at Your Doorstep!",
      heroSub: "Shop groceries and household essentials with fast delivery.",
      startShopping: "Start Shopping",
      categories: "Categories",
      all: "All",
      food: "Food",
      household: "Household",
      cosmetics: "Cosmetics",
      baby: "Baby Products",
      cart: "Cart",
      checkout: "Checkout",
      emptyCart: "Your cart is empty",
      total: "Total",
      footerText: "© 2025 Erkin Söwda. All rights reserved.",
      enterAdmin: "Enter Admin",
      adminPanel: "Admin Panel",
    },
  };

  if (isAdminMode) {
    return (
      <AdminDashboard
        language={language}
        products={products}
        addProduct={(newProduct) => setProducts([...products, newProduct])}
        removeProduct={(id) => setProducts(products.filter((p) => p.id !== id))}
        texts={texts[language]}
        exitAdmin={() => setIsAdminMode(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        language={language}
        setLanguage={setLanguage}
        cartCount={cart.length}
        openCart={() => setIsCartOpen(true)}
        toggleAdmin={() => setIsAdminMode(true)}
        adminButtonLabel={texts[language].adminPanel}
      />

      <Hero
        language={language}
        title={texts[language].heroTitle}
        subtitle={texts[language].heroSub}
        buttonText={texts[language].startShopping}
      />

      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={{
          all: texts[language].all,
          food: texts[language].food,
          household: texts[language].household,
          cosmetics: texts[language].cosmetics,
          baby: texts[language].baby,
        }}
      />

      <section className="container mx-auto px-4 py-8">
        <input
          type="text"
          placeholder={texts[language].searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:max-w-md mx-auto border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-200"
        />

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {activeCategory === "all"
            ? texts[language].all
            : activeCategory === "food"
            ? texts[language].food
            : activeCategory === "household"
            ? texts[language].household
            : activeCategory === "cosmetics"
            ? texts[language].cosmetics
            : texts[language].baby}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              language={language}
              addToCart={() => setCart([...cart, product])}
              currency="TMT"
              convertPrice={convertToTMT}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <img
              src="/logo.png"
              alt="Erkin Söwda Logo"
              className="w-48 h-48 mx-auto mb-4"
            />
            <p className="text-gray-500">{texts[language].emptyCart}</p>
          </div>
        )}
      </section>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        language={language}
        removeFromCart={(id) => setCart(cart.filter((item) => item.id !== id))}
        districtLabels={districts[language]}
        currency="TMT"
        exchangeRate={exchangeRate}
      />

      <Footer language={language} text={texts[language].footerText} />
    </div>
  );
}