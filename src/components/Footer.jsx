import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#6B4423', color: 'white', marginTop: 'auto' }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 style={{ fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: '1rem' }}>
              Hershy's Kitchen
            </h5>
            <p style={{ fontSize: '0.9rem', opacity: '0.9' }}>
              Handcrafted desserts and artisanal treats made with love, tradition, and the finest ingredients.
            </p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Quick Links</h6>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/" style={{ color: 'white', textDecoration: 'none', opacity: '0.9' }}>Home</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/menu" style={{ color: 'white', textDecoration: 'none', opacity: '0.9' }}>Menu</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/about" style={{ color: 'white', textDecoration: 'none', opacity: '0.9' }}>About Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Follow Us</h6>
            <div className="d-flex gap-3">
              <a href="#" style={{ color: 'white' }}><Instagram size={24} /></a>
              <a href="#" style={{ color: 'white' }}><Facebook size={24} /></a>
              <a href="#" style={{ color: 'white' }}><Twitter size={24} /></a>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)', margin: '1.5rem 0' }} />
        <div className="text-center" style={{ fontSize: '0.9rem', opacity: '0.8' }}>
          <p style={{ margin: 0 }}>© 2024 Hershy's Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;