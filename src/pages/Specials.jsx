import React, { useContext } from 'react';
import { Star } from 'lucide-react';
import { ThemeContext } from '../App';

const specialsData = [
  {
    id: 1,
    title: 'Autumn Spice Collection',
    description: 'Indulge in our seasonal favorites featuring pumpkin spice cake, cinnamon apple tarts, and maple pecan pie.',
    price: 299,
    label: 'FEATURED',
    labelColor: '#D97E00',
    image: 'https://tse1.mm.bing.net/th/id/OIP.pSi_wKVfj33L_KGwuRryaQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3?fit=centre'
  },
  {
    id: 2,
    title: 'Berry Blast Parfait',
    description: 'Layers of fresh mixed berries, Greek yogurt, homemade granola, and honey drizzle.',
    price: 189,
    label: 'NEW',
    labelColor: '#C19463',
    image: 'https://miro.medium.com/v2/resize:fit:1024/1*xExbqqru9N38_4A6LaGiBg.jpeg'
  },
  {
    id: 3,
    title: 'Caramel Macchiato Delight',
    description: 'Our signature espresso drink with vanilla, steamed milk, and rich caramel drizzle.',
    price: 149,
    label: null,
    image: 'https://img.freepik.com/premium-photo/delicious-caramel-frappuccino-with-caramel-sauce-cream-top_322067-217.jpg'
  },
  {
    id: 4,
    title: 'Custom Celebration Cakes',
    description: 'Make your special occasions unforgettable with our custom-designed cakes.',
    price: 899,
    label: null,
    image: 'https://static.wixstatic.com/media/2f359a_7c29b38ccd37450b8083a7da7f95d3de~mv2.jpg/v1/fill/w_756,h_605,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/433576910_383962524589623_4787232153358695243_n.jpg'
  }
];

function Specials() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh' }} className="py-5">
      <div className="container my-4">
        <div className="text-center mb-5">
          <h1 style={{ fontFamily: 'Georgia, serif', color: theme.text, fontSize: '3rem', fontWeight: 'bold' }}>
            Chef's Specials
          </h1>
          <p style={{ color: theme.textSecondary, fontSize: '1.1rem' }}>
            Limited-time seasonal creations and customer favorites
          </p>
          <div style={{ width: '80px', height: '3px', backgroundColor: theme.primary, margin: '20px auto' }}></div>
        </div>

        <div className="row g-4">
          {specialsData.map((item) => (
            <div key={item.id} className="col-md-6">
              <div
                style={{
                  border: `2px solid ${theme.border}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                  position: 'relative',
                  backgroundColor: theme.cardBg,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                  e.currentTarget.style.borderColor = theme.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = theme.border;
                }}
              >
                {item.label && (
                  <div style={{
                    backgroundColor: item.labelColor,
                    color: 'white',
                    padding: '8px 16px',
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Star size={14} /> {item.label}
                  </div>
                )}

                <img src={item.image} alt={item.title} style={{ width: '100%', height: '250px', objectFit: 'cover', objectPosition: 'center' }} />

                <div style={{ padding: '2rem' }}>
                  <h3 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '1rem' }}>{item.title}</h3>
                  <p style={{ color: theme.textSecondary, marginBottom: '1.5rem' }}>{item.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={{ fontSize: '1.5rem', color: theme.primary, fontWeight: 'bold' }}>₹{item.price}</span>
                    <button style={{
                      backgroundColor: theme.primary,
                      color: 'white',
                      border: 'none',
                      padding: '10px 24px',
                      borderRadius: '6px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specials;
