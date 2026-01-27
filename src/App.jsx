import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Specials from './pages/Specials';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import MyOrders from './pages/MyOrders';
import PartyOrders from './pages/PartyOrders';

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    bg: isDarkMode ? '#1a1a1a' : '#FFF8F0',
    cardBg: isDarkMode ? '#2d2d2d' : '#FFFFFF',
    text: isDarkMode ? '#e0e0e0' : '#6B4423',
    textSecondary: isDarkMode ? '#a97d70' : '#8B6F47',
    primary: isDarkMode ? '#E8B67A' : '#D4A574',
    accent: isDarkMode ? '#3a3a3a' : '#F5E6D3',
    border: isDarkMode ? '#404040' : '#E8D5C4',
    navBg: isDarkMode ? '#252525' : '#FFF8F0'
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, setIsDarkMode }}>
      <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: theme.bg, transition: 'all 0.3s' }}>
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/my-orders" element={<MyOrders />} />
            <Route path="/party-orders" element={<PartyOrders />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;