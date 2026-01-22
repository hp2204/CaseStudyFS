import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, Star, Info, Mail, Cookie } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" 
         style={{ backgroundColor: '#FFF8F0', borderBottom: '2px solid #E8D5C4' }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" 
              style={{ fontFamily: 'Georgia, serif', fontSize: '1.75rem', fontWeight: 'bold', color: '#6B4423' }}>
          <Cookie className="me-2" size={32} />
          Hershy's Kitchen
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" 
                    style={{ color: '#6B4423', fontWeight: isActive('/') ? 'bold' : 'normal' }}>
                <Home size={18} className="me-1" />Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" 
                    style={{ color: '#6B4423', fontWeight: isActive('/menu') ? 'bold' : 'normal' }}>
                <Menu size={18} className="me-1" />Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specials" 
                    style={{ color: '#6B4423', fontWeight: isActive('/specials') ? 'bold' : 'normal' }}>
                <Star size={18} className="me-1" />Specials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" 
                    style={{ color: '#6B4423', fontWeight: isActive('/about') ? 'bold' : 'normal' }}>
                <Info size={18} className="me-1" />About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" 
                    style={{ color: '#6B4423', fontWeight: isActive('/contact') ? 'bold' : 'normal' }}>
                <Mail size={18} className="me-1" />Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;