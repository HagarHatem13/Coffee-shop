import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import LoginPage from "./components/LoginPage";
import SearchBox from "./components/SearchBox";

function AppContent() {
  const location = useLocation();
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")) || null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const toggleSearch = () => setShowSearch(s => !s);
 const showHeaderFooter = location.pathname === "/";

  return (
    <>
      {showHeaderFooter && (
        <Header
          cartCount={cart.reduce((sum, p) => sum + p.quantity, 0)}
          onSearchClick={toggleSearch}
          user={user}
          setUser={setUser}
        />
      )}

      {showSearch && <SearchBox onClose={toggleSearch} onSearch={setSearchTerm} value={searchTerm} />}

      <Routes>
        <Route path="/" element={<><Home /><About /><Products addToCart={addToCart} searchTerm={searchTerm} /></>} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} user={user} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} user={user} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
      </Routes>

      {showHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


