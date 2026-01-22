import React from 'react';
import { Star } from 'lucide-react';

function Specials() {
  return (
    <div className="container my-5 py-4">
      <div className="text-center mb-5">
        <h1 style={{ fontFamily: 'Georgia, serif', color: '#6B4423', fontSize: '3rem', fontWeight: 'bold' }}>
          Chef's Specials
        </h1>
        <p style={{ color: '#8B6F47', fontSize: '1.1rem' }}>
          Limited-time seasonal creations and customer favorites
        </p>
        <div style={{ width: '80px', height: '3px', backgroundColor: '#D4A574', margin: '20px auto' }}></div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div style={{ border: '2px solid #D4A574', borderRadius: '12px', overflow: 'hidden', height: '100%', position: 'relative' }}>
            <div style={{ backgroundColor: '#D4A574', color: 'white', padding: '8px 16px', position: 'absolute', top: '16px', right: '16px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem' }}>
              <Star size={14} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
              FEATURED
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>🍂</div>
              <h3 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>
                Autumn Spice Collection
              </h3>
              <p style={{ color: '#8B6F47', marginBottom: '1.5rem' }}>
                Indulge in our seasonal favorites featuring pumpkin spice cake, cinnamon apple tarts, and maple pecan pie. Available through November.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontSize: '1.5rem', color: '#D4A574', fontWeight: 'bold' }}>$12.99</span>
                <button style={{ backgroundColor: '#6B4423', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div style={{ border: '2px solid #D4A574', borderRadius: '12px', overflow: 'hidden', height: '100%', position: 'relative' }}>
            <div style={{ backgroundColor: '#C19463', color: 'white', padding: '8px 16px', position: 'absolute', top: '16px', right: '16px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem' }}>
              NEW
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>🍓</div>
              <h3 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>
                Berry Blast Parfait
              </h3>
              <p style={{ color: '#8B6F47', marginBottom: '1.5rem' }}>
                Layers of fresh mixed berries, Greek yogurt, homemade granola, and honey drizzle. A healthy and delicious treat!
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontSize: '1.5rem', color: '#D4A574', fontWeight: 'bold' }}>$8.99</span>
                <button style={{ backgroundColor: '#6B4423', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div style={{ backgroundColor: '#FFF8F0', borderRadius: '12px', padding: '2rem', height: '100%' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☕</div>
            <h3 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>
              Caramel Macchiato Delight
            </h3>
            <p style={{ color: '#8B6F47', marginBottom: '1.5rem' }}>
              Our signature espresso drink with vanilla, steamed milk, and rich caramel drizzle. Perfect for cozy afternoons.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span style={{ fontSize: '1.5rem', color: '#D4A574', fontWeight: 'bold' }}>$5.99</span>
              <button style={{ backgroundColor: 'white', color: '#6B4423', border: '2px solid #6B4423', padding: '10px 24px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div style={{ backgroundColor: '#FFF8F0', borderRadius: '12px', padding: '2rem', height: '100%' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎂</div>
            <h3 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>
              Custom Celebration Cakes
            </h3>
            <p style={{ color: '#8B6F47', marginBottom: '1.5rem' }}>
              Make your special occasions unforgettable with our custom-designed cakes. Available in various flavors and sizes.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <span style={{ fontSize: '1.5rem', color: '#D4A574', fontWeight: 'bold' }}>From $45</span>
              <button style={{ backgroundColor: 'white', color: '#6B4423', border: '2px solid #6B4423', padding: '10px 24px', borderRadius: '6px', fontWeight: '600', cursor: 'pointer' }}>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;