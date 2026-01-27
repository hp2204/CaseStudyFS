import React, { useContext, useState } from 'react';
import { PartyPopper, Cake, Users, Calendar, Phone, Mail, User } from 'lucide-react';
import { ThemeContext } from '../App';

const partyPackages = [
  {
    id: 1,
    name: 'Birthday Bash',
    price: 5000,
    serves: '25-30 people',
    items: ['Starters Platter', 'Main Course (3 varieties)', 'Desserts', 'Birthday Cake', 'Beverages'],
    icon: '🎂'
  },
  {
    id: 2,
    name: 'Anniversary Special',
    price: 7000,
    serves: '30-40 people',
    items: ['Premium Starters', 'Main Course (4 varieties)', 'Special Desserts', 'Anniversary Cake', 'Welcome Drinks'],
    icon: '💐'
  },
  {
    id: 3,
    name: 'House Party Combo',
    price: 8000,
    serves: '40-50 people',
    items: ['Starters Platter', 'Main Course (5 varieties)', 'Dessert Bar', 'Snacks', 'Beverages'],
    icon: '🎊'
  },
  {
    id: 4,
    name: 'Small Gathering',
    price: 3000,
    serves: '15-20 people',
    items: ['Starters', 'Main Course (2 varieties)', 'Desserts', 'Beverages'],
    icon: '👨‍👩‍👧‍👦'
  }
];

const celebrationCakes = [
  { id: 1, name: 'Chocolate Truffle Cake', price: 800, weight: '1 kg', image: 'https://i.pinimg.com/originals/6a/18/24/6a1824f469ec5f6fd0b61c5ddfa2c34b.jpg' },
  { id: 2, name: 'Black Forest Cake', price: 750, weight: '1 kg', image: 'https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb-500x500.jpg' },
  { id: 3, name: 'Pineapple Cake', price: 650, weight: '1 kg', image: 'https://www.bing.com/th/id/OIP.6feY18AsM1aM5FXfOHPt5QAAAA?w=160&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' },
  { id: 4, name: 'Butterscotch Cake', price: 700, weight: '1 kg', image: 'https://www.bing.com/th/id/OIP.B3VVDBwzKS-u9UHJOe0KCgAAAA?w=234&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' },
  { id: 5, name: 'Red Velvet Cake', price: 900, weight: '1 kg', image: 'https://th.bing.com/th/id/OIP.BIfUwqLvS7I3VaUQy5eIxAHaEM?w=314&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
  { id: 6, name: 'Vanilla Delight', price: 600, weight: '1 kg', image: 'https://th.bing.com/th/id/OIP.kelpdXRrGX9eCGeZdaxrlQHaFE?w=277&h=189&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
];

const PartyOrders = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedCake, setSelectedCake] = useState(null);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your inquiry! We'll contact you shortly at ${formData.phone}`);
    setFormData({ name: '', phone: '', email: '', eventDate: '', eventType: '', guestCount: '', message: '' });
    setShowInquiryForm(false);
  };

  return (
    <div style={{ background: theme.bg, minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ color: theme.text, fontSize: '2.5rem', marginBottom: '1rem' }}>
            <PartyPopper size={50} style={{ verticalAlign: 'middle', marginRight: '1rem' }} color={theme.primary} />
            Party & Event Orders
          </h1>
          <p style={{ color: theme.textSecondary, fontSize: '1.2rem' }}>
            Make your celebrations memorable with our special party packages
          </p>
        </div>

        {/* Party Packages */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            textAlign: 'center', 
            color: theme.primary, 
            marginBottom: '2rem', 
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <Users size={32} /> Party Packages
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {partyPackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                style={{
                  background: theme.cardBg,
                  padding: '2rem',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: selectedPackage?.id === pkg.id ? `3px solid ${theme.primary}` : `2px solid ${theme.border}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{pkg.icon}</div>
                <h3 style={{ color: theme.primary, fontSize: '1.5rem', marginBottom: '0.5rem' }}>{pkg.name}</h3>
                <div style={{ color: theme.text, fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Serves: {pkg.serves}
                </div>
                <ul style={{ color: theme.text, marginBottom: '1.5rem', listStyle: 'none', padding: 0 }}>
                  {pkg.items.map((item, i) => <li key={i} style={{ padding: '0.4rem 0', borderBottom: `1px solid ${theme.border}` }}>✓ {item}</li>)}
                </ul>
                <div style={{ color: theme.primary, fontSize: '2rem', fontWeight: 'bold', marginTop: '1rem' }}>₹{pkg.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Celebration Cakes */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            textAlign: 'center', 
            color: theme.primary, 
            marginBottom: '2rem', 
            fontSize: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            <Cake size={32} /> Celebration Cakes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {celebrationCakes.map((cake) => (
              <div
                key={cake.id}
                onClick={() => setSelectedCake(cake)}
                style={{
                  background: theme.cardBg,
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  border: selectedCake?.id === cake.id ? `3px solid ${theme.primary}` : `2px solid ${theme.border}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <img
                  src={cake.image}
                  alt={cake.name}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    borderRadius: '12px',
                    marginBottom: '1rem'
                  }}
                />
                <h3 style={{ color: theme.text, fontSize: '1.2rem', marginBottom: '0.5rem' }}>🎂 {cake.name}</h3>
                <p style={{ color: theme.textSecondary, marginBottom: '0.5rem' }}>{cake.weight}</p>
                <p style={{ color: theme.primary, fontSize: '1.5rem', fontWeight: 'bold' }}>₹{cake.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inquiry Button */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <button
            onClick={() => setShowInquiryForm(!showInquiryForm)}
            style={{
              background: theme.primary,
              color: '#FFF',
              border: 'none',
              padding: '1.5rem 3rem',
              borderRadius: '12px',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'; }}
          >
            {showInquiryForm ? 'Hide' : 'Send'} Inquiry
          </button>
        </div>

        {/* Inquiry Form */}
        {showInquiryForm && (
          <div style={{
            background: theme.cardBg,
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            border: `3px solid ${theme.primary}`,
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{ color: theme.text, marginBottom: '2rem', fontSize: '2rem', textAlign: 'center' }}>
              Party Order Inquiry
            </h2>

            {selectedPackage && (
              <div style={{ background: `${theme.primary}20`, padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: `2px solid ${theme.primary}` }}>
                <strong style={{ color: theme.primary }}>Selected Package:</strong> {selectedPackage.name} (₹{selectedPackage.price})
              </div>
            )}

            {selectedCake && (
              <div style={{ background: `${theme.primary}20`, padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', border: `2px solid ${theme.primary}` }}>
                <strong style={{ color: theme.primary }}>Selected Cake:</strong> {selectedCake.name} (₹{selectedCake.price})
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ color: theme.text, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><User size={20} /> Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: `2px solid ${theme.border}`, background: theme.bg, color: theme.text, fontSize: '1rem' }}/>
                </div>
                <div>
                  <label style={{ color: theme.text, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Phone size={20} /> Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: `2px solid ${theme.border}`, background: theme.bg, color: theme.text, fontSize: '1rem' }}/>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ color: theme.text, display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}><Mail size={20} /> Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: `2px solid ${theme.border}`, background: theme.bg, color: theme.text, fontSize: '1rem' }}/>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ color: theme.text, marginBottom: '0.5rem', display: 'block' }}>Event Date *</label>
                  <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: `2px solid ${theme.border}`, background: theme.bg, color: theme.text, fontSize: '1rem' }}/>
                </div>
                <div>
                  <label style={{ color: theme.text, marginBottom: '0.5rem', display: 'block' }}>Event Type *</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange} required style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: `2px solid ${theme.border}`, background: theme.bg, color: theme.text, fontSize: '1rem', cursor: 'pointer' }}>
                    <option value="">Select</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>House Party</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: theme.text, marginBottom: '0.5rem', display: 'block' }}>Guest Count *</label>
                  <input type="number" name="guestCount" value={formData.guestCount} onChange={handleChange} required min="1" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: `2px solid ${theme.border}`, background: theme.bg, color: theme.text, fontSize: '1rem' }}/>
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ color: theme.text, marginBottom: '0.5rem', display: 'block' }}>Special Requirements</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: `2px solid ${theme.border}`, background: theme.bg, color: theme.text, fontSize: '1rem', resize: 'vertical' }}/>
              </div>

              <button type="submit" style={{ width: '100%', background: theme.primary, color: '#FFF', border: 'none', padding: '1.2rem', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartyOrders;
