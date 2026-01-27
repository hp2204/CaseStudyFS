import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, Star, Info, Mail, Cookie, Moon, Sun, ShoppingCart, User, Package } from 'lucide-react';
import { ThemeContext } from '../App';

function Navbar() {
  const location = useLocation();
  const { theme, isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg sticky-top" 
         style={{ backgroundColor: theme.navBg, borderBottom: `2px solid ${theme.border}`, transition: 'all 0.3s' }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" 
              style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', fontWeight: 'bold', color: theme.text }}>
          <Cookie className="me-2" size={32} />
          Hershy's Kitchen
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" 
                    style={{ color: theme.text, fontWeight: isActive('/') ? 'bold' : 'normal' }}>
                <Home size={18} className="me-1" />Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" 
                    style={{ color: theme.text, fontWeight: isActive('/menu') ? 'bold' : 'normal' }}>
                <Menu size={18} className="me-1" />Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specials" 
                    style={{ color: theme.text, fontWeight: isActive('/specials') ? 'bold' : 'normal' }}>
                <Star size={18} className="me-1" />Specials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/party-orders" 
                    style={{ color: theme.text, fontWeight: isActive('/party-orders') ? 'bold' : 'normal' }}>
                <Package size={18} className="me-1" />Party Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" 
                    style={{ color: theme.text, fontWeight: isActive('/about') ? 'bold' : 'normal' }}>
                <Info size={18} className="me-1" />About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" 
                    style={{ color: theme.text, fontWeight: isActive('/contact') ? 'bold' : 'normal' }}>
                <Mail size={18} className="me-1" />Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart" 
                    style={{ color: theme.text, fontWeight: isActive('/cart') ? 'bold' : 'normal' }}>
                <ShoppingCart size={18} className="me-1" />Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-orders" 
                    style={{ color: theme.text, fontWeight: isActive('/my-orders') ? 'bold' : 'normal' }}>
                <User size={18} className="me-1" />My Orders
              </Link>
            </li>
            <li className="nav-item ms-3">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{ 
                  backgroundColor: theme.primary, 
                  border: 'none', 
                  borderRadius: '50%', 
                  width: '40px', 
                  height: '40px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {isDarkMode ? <Sun size={20} color="white" /> : <Moon size={20} color="white" />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;