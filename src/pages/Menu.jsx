import React, { useState } from 'react';

function Menu() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const menuData = {
    desserts: [
      { name: 'Chocolate Lava Cake', price: '$8.99', description: 'Warm chocolate cake with a molten center, served with vanilla ice cream' },
      { name: 'Classic Tiramisu', price: '$7.99', description: 'Layers of espresso-soaked ladyfingers and mascarpone cream' },
      { name: 'Strawberry Cheesecake', price: '$9.99', description: 'Creamy cheesecake with fresh strawberry compote' },
      { name: 'Apple Pie', price: '$6.99', description: 'Traditional homemade pie with cinnamon-spiced apples' }
    ],
    snacks: [
      { name: 'Artisan Croissants', price: '$4.99', description: 'Buttery, flaky croissants baked fresh daily' },
      { name: 'Savory Quiche', price: '$5.99', description: 'Spinach and cheese quiche with a golden crust' },
      { name: 'Cinnamon Rolls', price: '$5.49', description: 'Soft rolls with cream cheese frosting' },
      { name: 'Almond Biscotti', price: '$3.99', description: 'Crunchy Italian cookies perfect for dipping' }
    ],
    beverages: [
      { name: 'Specialty Coffee', price: '$4.49', description: 'Freshly brewed premium coffee beans' },
      { name: 'Hot Chocolate', price: '$4.99', description: 'Rich Belgian chocolate with whipped cream' },
      { name: 'Herbal Tea Selection', price: '$3.99', description: 'Choose from chamomile, peppermint, or earl grey' },
      { name: 'Fruit Smoothies', price: '$5.99', description: 'Fresh blended fruits with yogurt' }
    ]
  };

  const CategoryAccordion = ({ title, items, icon, categoryKey }) => (
    <div className="mb-3" style={{ border: '1px solid #E8D5C4', borderRadius: '8px', overflow: 'hidden' }}>
      <div 
        onClick={() => setExpandedCategory(expandedCategory === categoryKey ? null : categoryKey)}
        style={{ 
          padding: '20px', 
          backgroundColor: expandedCategory === categoryKey ? '#F5E6D3' : '#FFF8F0',
          cursor: 'pointer',
          transition: 'all 0.3s',
          borderBottom: expandedCategory === categoryKey ? '1px solid #E8D5C4' : 'none'
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h4 style={{ margin: 0, color: '#6B4423', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '12px', fontSize: '1.5rem' }}>{icon}</span>
            {title}
          </h4>
          <span style={{ color: '#6B4423', fontSize: '1.5rem' }}>
            {expandedCategory === categoryKey ? '−' : '+'}
          </span>
        </div>
      </div>
      {expandedCategory === categoryKey && (
        <div style={{ padding: '20px', backgroundColor: 'white' }}>
          <div className="row g-3">
            {items.map((item, idx) => (
              <div key={idx} className="col-md-6">
                <div style={{ padding: '16px', backgroundColor: '#FFF8F0', borderRadius: '8px', height: '100%' }}>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 style={{ color: '#6B4423', fontWeight: 'bold', margin: 0 }}>{item.name}</h5>
                    <span style={{ color: '#D4A574', fontWeight: 'bold', fontSize: '1.1rem' }}>{item.price}</span>
                  </div>
                  <p style={{ color: '#8B6F47', margin: 0, fontSize: '0.95rem' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="container my-5 py-4">
      <div className="text-center mb-5">
        <h1 style={{ fontFamily: 'Georgia, serif', color: '#6B4423', fontSize: '3rem', fontWeight: 'bold' }}>
          Our Menu
        </h1>
        <p style={{ color: '#8B6F47', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto' }}>
          Explore our carefully curated selection of artisanal desserts, savory snacks, and premium beverages
        </p>
        <div style={{ width: '80px', height: '3px', backgroundColor: '#D4A574', margin: '20px auto' }}></div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <CategoryAccordion title="Desserts" items={menuData.desserts} icon="🍰" categoryKey="desserts" />
        <CategoryAccordion title="Snacks" items={menuData.snacks} icon="🥐" categoryKey="snacks" />
        <CategoryAccordion title="Beverages" items={menuData.beverages} icon="☕" categoryKey="beverages" />
      </div>
    </div>
  );
}

export default Menu;