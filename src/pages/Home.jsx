import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, UtensilsCrossed, PartyPopper, Cake } from 'lucide-react';
import { ThemeContext } from '../App';

const winterComfortItems = [
  { 
    name: 'Hot Chocolate', 
    price: 80, 
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=300&h=200&fit=crop'
  },
  { 
    name: 'Masala Chai', 
    price: 30, 
    image: 'https://masalaandchai.com/wp-content/uploads/2021/07/Masala-Chai.jpg?w=300&h=200&fit=crop'
  },
  { 
    name: 'Hot Latte', 
    price: 90, 
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop'
  },
  { 
    name: 'Warm Soup', 
    price: 100, 
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=200&fit=crop'
  }
];

const thaliOptions = [
  { 
    name: 'Regular Thali', 
    price: 180, 
    items: 'Dal, Rice, Roti, Sabzi, Salad',
    image: 'https://www.bing.com/th/id/OIP.ASMIsn6Tc4SehWLLpoX7cwHaFm?w=291&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2?w=400&h=300&fit=crop'
  },
  { 
    name: 'Special Thali', 
    price: 280, 
    items: 'Dal, Rice, Roti, Paneer, Sabzi, Sweet, Salad',
    image: 'https://www.bing.com/th/id/OIP._Lpele1Fw_kdedHe8zW8RwHaG0?w=221&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2?w=400&h=300&fit=crop'
  },
  { 
    name: 'South Indian Thali', 
    price: 250, 
    items: 'Sambar, Rice, Rasam, Poriyal, Curd Rice, Papad',
    image: 'https://as1.ftcdn.net/v2/jpg/11/07/77/78/1000_F_1107777813_87Pbj1gy2KXr3EJ79phOInVplCNbXFig.jpg?w=400&h=300&fit=crop'
  }
];

const partyHighlights = [
  { 
    name: 'Birthday Bash 🎂', 
    price: 5000, 
    serves: '25-30 people',
    image: 'https://tse3.mm.bing.net/th/id/OIP.Bje5qmJarYPHpRGOwCcoqAHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3?w=300&h=600&fit=centre'
  },
  { 
    name: 'Anniversary Special 💐', 
    price: 7000, 
    serves: '40-50 people',
    image: 'https://tse2.mm.bing.net/th/id/OIP.6aZ44B-gO49YbxQeZ-baxgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3?w=400&h=300&fit=crop'
  },
  { 
    name: 'House Party Combo 🎊', 
    price: 8000, 
    serves: '40-50 people',
    image: 'https://i.pinimg.com/originals/1b/07/86/1b0786c83baee98c26eed3fb1e1f3bfe.jpg?w=400&h=300&fit=crop'
  }
];

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const colors = theme;
  const [vegOnly, setVegOnly] = useState(false);
  const navigate = useNavigate();
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    '🎉 20% OFF on first order!',
    '🎁 Free dessert on orders above ₹500',
    '🎮 Play & Win vouchers!',
    '🎓 Student discount: 15% OFF'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.accent}99, ${colors.secondary}99)`,
        padding: '4rem 2rem',
        textAlign: 'center',
        color: '#FFF'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '1rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Welcome to Hershy's Kitchen
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.95 }}>
            Where Tradition Meets Taste 🍽️
          </p>
          <button
            onClick={() => navigate('/menu')}
            style={{
              background: '#FFF',
              color: colors.accent,
              border: 'none',
              padding: '1rem 3rem',
              fontSize: '1.2rem',
              borderRadius: '30px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            Explore Menu
          </button>
        </div>
      </div>

      {/* Flashing Offers */}
      <div style={{
        background: colors.accent,
        color: '#FFF',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        animation: 'pulse 2s infinite'
      }}>
        {offers[currentOffer]}
      </div>

      

      {/* Winter Comfort Box */}
      <div style={{ padding: '3rem 2rem', background: colors.bg }}>
        <h2 style={{ textAlign: 'center', color: colors.text, marginBottom: '2rem', fontSize: '2rem' }}>
          ❄️ Winter Comfort Box
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {winterComfortItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: colors.cardBg,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: `2px solid ${colors.border}`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ color: colors.text, marginBottom: '0.5rem', fontSize: '1.2rem' }}>{item.name}</h3>
                <p style={{ color: colors.accent, fontSize: '1.3rem', fontWeight: 'bold' }}>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thali Combos */}
      <div style={{ padding: '3rem 2rem', background: colors.cardBg }}>
        <h2 style={{ textAlign: 'center', color: colors.text, marginBottom: '2rem', fontSize: '2rem' }}>
          🍛 Complete Meal Thalis
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {thaliOptions.map((thali, idx) => (
            <div
              key={idx}
              style={{
                background: colors.bg,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: `3px solid ${colors.accent}`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img 
                  src={thali.image} 
                  alt={thali.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ color: colors.accent, marginBottom: '1rem', fontSize: '1.5rem' }}>
                  {thali.name}
                </h3>
                <p style={{ color: colors.text, marginBottom: '1rem', lineHeight: '1.6' }}>
                  {thali.items}
                </p>
                <p style={{ color: colors.accent, fontSize: '1.5rem', fontWeight: 'bold' }}>
                  ₹{thali.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Party Orders Section */}
      <div style={{ padding: '3rem 2rem', background: colors.bg }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: colors.text, 
          marginBottom: '1rem', 
          fontSize: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <PartyPopper size={40} color={colors.accent} />
          Celebrate with Us!
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: colors.text, 
          opacity: 0.8, 
          marginBottom: '2rem',
          fontSize: '1.1rem'
        }}>
          Make your special moments unforgettable with our party packages
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          marginBottom: '2rem'
        }}>
          {partyHighlights.map((party, idx) => (
            <div
              key={idx}
              style={{
                background: colors.cardBg,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                border: `3px solid ${colors.accent}`,
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onClick={() => navigate('/party-orders')}
            >
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={party.image} 
                  alt={party.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  fontSize: '3rem',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                  {party.icon}
                </div>
              </div>
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: colors.accent, marginBottom: '0.5rem', fontSize: '1.4rem' }}>
                  {party.name}
                </h3>
                <p style={{ color: colors.text, marginBottom: '0.5rem', fontSize: '1rem' }}>
                  Serves: {party.serves}
                </p>
                <p style={{ color: colors.accent, fontSize: '1.8rem', fontWeight: 'bold' }}>
                  ₹{party.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => navigate('/party-orders')}
            style={{
              background: colors.accent,
              color: '#FFF',
              border: 'none',
              padding: '1.2rem 3rem',
              borderRadius: '12px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
            }}
          >
            <Cake size={24} />
            View All Party Packages & Cakes
          </button>
        </div>
      </div>

      {/* Student Special */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
        padding: '3rem 2rem',
        textAlign: 'center',
        color: '#daa049'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎓 Student Special</h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>
          15% OFF for students + Free delivery to hostels & PGs!
        </p>
        <p style={{ fontSize: '1rem', opacity: 0.9 }}>Show your student ID to avail this offer</p>
      </div>
    </div>
  );
};

export default Home;