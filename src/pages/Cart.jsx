import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { ThemeContext } from '../App';

function Cart() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Paneer Tikka', price: 249, quantity: 2, emoji: '🧀' },
    { id: 2, name: 'Butter Chicken', price: 299, quantity: 1, emoji: '🍗' },
    { id: 3, name: 'Veg Biryani', price: 199, quantity: 1, emoji: '🍛' }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 40;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh', paddingBottom: '3rem' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 style={{ fontFamily: 'Georgia, serif', color: theme.text, fontSize: '3rem', fontWeight: 'bold' }}>
            <ShoppingCart size={50} style={{ marginRight: '1rem', verticalAlign: 'middle' }} />
            Your Cart
          </h1>
          <p style={{ color: theme.textSecondary, fontSize: '1.1rem' }}>
            {cartItems.length} items in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: theme.cardBg,
            borderRadius: '16px',
            border: `2px solid ${theme.border}`
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🛒</div>
            <h3 style={{ color: theme.text, marginBottom: '1rem' }}>Your cart is empty</h3>
            <p style={{ color: theme.textSecondary, marginBottom: '2rem' }}>Add some delicious items to get started!</p>
            <button
              onClick={() => navigate('/menu')}
              style={{
                backgroundColor: theme.primary,
                color: 'white',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <div className="row g-4">
            <div className="col-lg-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: theme.cardBg,
                    borderRadius: '12px',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                    border: `2px solid ${theme.border}`,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                    e.currentTarget.style.borderColor = theme.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = theme.border;
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <div style={{ fontSize: '3rem' }}>{item.emoji}</div>
                      <div>
                        <h4 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '0.25rem' }}>
                          {item.name}
                        </h4>
                        <p style={{ color: theme.primary, fontSize: '1.3rem', fontWeight: 'bold', margin: 0 }}>
                          ₹{item.price}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{
                            backgroundColor: theme.cardBg,
                            border: `2px solid ${theme.border}`,
                            borderRadius: '6px',
                            width: '36px',
                            height: '36px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = theme.primary;
                            e.target.style.borderColor = theme.primary;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = theme.cardBg;
                            e.target.style.borderColor = theme.border;
                          }}
                        >
                          <Minus size={18} color={theme.text} />
                        </button>
                        <span style={{
                          color: theme.text,
                          fontWeight: 'bold',
                          fontSize: '1.2rem',
                          minWidth: '30px',
                          textAlign: 'center'
                        }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{
                            backgroundColor: theme.cardBg,
                            border: `2px solid ${theme.border}`,
                            borderRadius: '6px',
                            width: '36px',
                            height: '36px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = theme.primary;
                            e.target.style.borderColor = theme.primary;
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = theme.cardBg;
                            e.target.style.borderColor = theme.border;
                          }}
                        >
                          <Plus size={18} color={theme.text} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        style={{
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '8px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        <Trash2 size={24} color="#FF5722" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div
                style={{
                  backgroundColor: theme.cardBg,
                  borderRadius: '16px',
                  padding: '2rem',
                  border: `3px solid ${theme.primary}`,
                  position: 'sticky',
                  top: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <h3 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '1.5rem' }}>
                  Order Summary
                </h3>

                <div style={{ marginBottom: '1rem' }}>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: theme.textSecondary }}>Subtotal</span>
                    <span style={{ color: theme.text, fontWeight: 'bold' }}>₹{subtotal}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: theme.textSecondary }}>Delivery Fee</span>
                    <span style={{ color: theme.text, fontWeight: 'bold' }}>₹{deliveryFee}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: theme.textSecondary }}>Tax (5%)</span>
                    <span style={{ color: theme.text, fontWeight: 'bold' }}>₹{tax}</span>
                  </div>
                  <hr style={{ borderColor: theme.border, margin: '1rem 0' }} />
                  <div className="d-flex justify-content-between">
                    <span style={{ color: theme.text, fontSize: '1.3rem', fontWeight: 'bold' }}>Total</span>
                    <span style={{ color: theme.primary, fontSize: '1.5rem', fontWeight: 'bold' }}>₹{total}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/checkout')}
                  style={{
                    width: '100%',
                    backgroundColor: theme.primary,
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    marginTop: '1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                  }}
                >
                  Proceed to Checkout
                </button>

                <button
                  onClick={() => navigate('/menu')}
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    color: theme.text,
                    border: `2px solid ${theme.border}`,
                    padding: '12px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginTop: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = theme.accent;
                    e.target.style.borderColor = theme.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = theme.border;
                  }}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;