import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="position-relative" style={{ height: '500px', background: 'linear-gradient(135deg, #FFF8F0 0%, #F5E6D3 100%)', overflow: 'hidden' }}>
        <div className="container h-100 d-flex align-items-center">
          <div className="row w-100">
            <div className="col-lg-6">
              <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '3.5rem', color: '#6B4423', fontWeight: 'bold', lineHeight: '1.2' }}>
                Where Every Bite Tells a Story
              </h1>
              <p style={{ fontSize: '1.25rem', color: '#8B6F47', marginTop: '1.5rem', marginBottom: '2rem' }}>
                Handcrafted desserts and artisanal treats made with love, tradition, and the finest ingredients.
              </p>
              <button 
                onClick={() => navigate('/menu')}
                style={{ 
                  backgroundColor: '#D4A574', 
                  color: 'white', 
                  border: 'none', 
                  padding: '14px 36px', 
                  fontSize: '1.1rem', 
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#C19463'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#D4A574'}
              >
                <ShoppingBag size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Explore Menu
              </button>
            </div>
            <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
              <div style={{ fontSize: '200px', opacity: '0.15', color: '#6B4423' }}>🍰</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="row text-center mb-5">
          <div className="col">
            <h2 style={{ fontFamily: 'Georgia, serif', color: '#6B4423', fontSize: '2.5rem', fontWeight: 'bold' }}>
              Why Choose Hershy's?
            </h2>
            <div style={{ width: '80px', height: '3px', backgroundColor: '#D4A574', margin: '20px auto' }}></div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="text-center p-4" style={{ backgroundColor: '#FFF8F0', borderRadius: '12px', height: '100%' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥖</div>
              <h4 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>Fresh Daily</h4>
              <p style={{ color: '#8B6F47' }}>
                Everything baked fresh every morning using traditional recipes passed down through generations.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4" style={{ backgroundColor: '#FFF8F0', borderRadius: '12px', height: '100%' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌾</div>
              <h4 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>Natural Ingredients</h4>
              <p style={{ color: '#8B6F47' }}>
                Only the finest organic ingredients, locally sourced whenever possible, no artificial preservatives.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4" style={{ backgroundColor: '#FFF8F0', borderRadius: '12px', height: '100%' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❤️</div>
              <h4 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>Made with Love</h4>
              <p style={{ color: '#8B6F47' }}>
                Each item is crafted with care and attention to detail, just like homemade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;