import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Clock, CreditCard, Wallet, CheckCircle } from 'lucide-react';
import { ThemeContext } from '../App';

function Checkout() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    phone: '',
    deliveryTime: 'now'
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! 🎉');
    navigate('/my-orders');
  };

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh', paddingBottom: '3rem' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 style={{ fontFamily: 'Georgia, serif', color: theme.text, fontSize: '3rem', fontWeight: 'bold' }}>
            Checkout
          </h1>
          <p style={{ color: theme.textSecondary, fontSize: '1.1rem' }}>
            Complete your order
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              {/* Delivery Information */}
              <div
                style={{
                  backgroundColor: theme.cardBg,
                  borderRadius: '16px',
                  padding: '2rem',
                  marginBottom: '2rem',
                  border: `2px solid ${theme.border}`,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <h3 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={28} color={theme.primary} />
                  Delivery Information
                </h3>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ color: theme.text, display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Delivery Address *
                  </label>
                  <textarea
                    required
                    value={deliveryInfo.address}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                    placeholder="Enter your complete address"
                    rows="3"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: `2px solid ${theme.border}`,
                      backgroundColor: theme.bg,
                      color: theme.text,
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ color: theme.text, display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={deliveryInfo.phone}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: `2px solid ${theme.border}`,
                      backgroundColor: theme.bg,
                      color: theme.text,
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ color: theme.text, display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    <Clock size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                    Delivery Time
                  </label>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryInfo({ ...deliveryInfo, deliveryTime: 'now' })}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '8px',
                        border: `2px solid ${theme.border}`,
                        backgroundColor: deliveryInfo.deliveryTime === 'now' ? theme.primary : theme.cardBg,
                        color: deliveryInfo.deliveryTime === 'now' ? 'white' : theme.text,
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (deliveryInfo.deliveryTime !== 'now') {
                          e.target.style.borderColor = theme.primary;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (deliveryInfo.deliveryTime !== 'now') {
                          e.target.style.borderColor = theme.border;
                        }
                      }}
                    >
                      Deliver Now
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryInfo({ ...deliveryInfo, deliveryTime: 'schedule' })}
                      style={{
                        flex: 1,
                        padding: '12px',
                        borderRadius: '8px',
                        border: `2px solid ${theme.border}`,
                        backgroundColor: deliveryInfo.deliveryTime === 'schedule' ? theme.primary : theme.cardBg,
                        color: deliveryInfo.deliveryTime === 'schedule' ? 'white' : theme.text,
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (deliveryInfo.deliveryTime !== 'schedule') {
                          e.target.style.borderColor = theme.primary;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (deliveryInfo.deliveryTime !== 'schedule') {
                          e.target.style.borderColor = theme.border;
                        }
                      }}
                    >
                      Schedule for Later
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div
                style={{
                  backgroundColor: theme.cardBg,
                  borderRadius: '16px',
                  padding: '2rem',
                  marginBottom: '2rem',
                  border: `2px solid ${theme.border}`,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <h3 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CreditCard size={28} color={theme.primary} />
                  Payment Method
                </h3>

                <div className="d-flex flex-column gap-3">
                  <div
                    onClick={() => setPaymentMethod('cod')}
                    style={{
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: `2px solid ${paymentMethod === 'cod' ? theme.primary : theme.border}`,
                      backgroundColor: paymentMethod === 'cod' ? `${theme.primary}20` : theme.bg,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Wallet size={32} color={theme.primary} />
                    <div>
                      <h5 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '0.25rem' }}>
                        Cash on Delivery
                      </h5>
                      <p style={{ color: theme.textSecondary, fontSize: '0.9rem', margin: 0 }}>
                        Pay when you receive your order
                      </p>
                    </div>
                    {paymentMethod === 'cod' && (
                      <CheckCircle size={28} color={theme.primary} style={{ marginLeft: 'auto' }} />
                    )}
                  </div>

                  <div
                    onClick={() => setPaymentMethod('online')}
                    style={{
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: `2px solid ${paymentMethod === 'online' ? theme.primary : theme.border}`,
                      backgroundColor: paymentMethod === 'online' ? `${theme.primary}20` : theme.bg,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <CreditCard size={32} color={theme.primary} />
                    <div>
                      <h5 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '0.25rem' }}>
                        Online Payment
                      </h5>
                      <p style={{ color: theme.textSecondary, fontSize: '0.9rem', margin: 0 }}>
                        UPI, Cards, Wallets
                      </p>
                    </div>
                    {paymentMethod === 'online' && (
                      <CheckCircle size={28} color={theme.primary} style={{ marginLeft: 'auto' }} />
                    )}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: theme.primary,
                  color: 'white',
                  border: 'none',
                  padding: '18px',
                  borderRadius: '12px',
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.02)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                }}
              >
                Place Order
              </button>
            </form>
          </div>

          {/* Order Summary */}
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

              <div style={{ marginBottom: '1.5rem' }}>
                <div className="d-flex justify-content-between mb-2">
                  <span style={{ color: theme.textSecondary }}>Subtotal</span>
                  <span style={{ color: theme.text, fontWeight: 'bold' }}>₹747</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span style={{ color: theme.textSecondary }}>Delivery Fee</span>
                  <span style={{ color: theme.text, fontWeight: 'bold' }}>₹40</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span style={{ color: theme.textSecondary }}>Tax (5%)</span>
                  <span style={{ color: theme.text, fontWeight: 'bold' }}>₹37</span>
                </div>
                <hr style={{ borderColor: theme.border, margin: '1rem 0' }} />
                <div className="d-flex justify-content-between">
                  <span style={{ color: theme.text, fontSize: '1.3rem', fontWeight: 'bold' }}>Total</span>
                  <span style={{ color: theme.primary, fontSize: '1.5rem', fontWeight: 'bold' }}>₹824</span>
                </div>
              </div>

              <div style={{
                backgroundColor: `${theme.primary}20`,
                padding: '1rem',
                borderRadius: '8px',
                border: `2px solid ${theme.primary}`
              }}>
                <p style={{ color: theme.text, fontSize: '0.9rem', margin: 0, textAlign: 'center' }}>
                  🎉 You're saving ₹50 on this order!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;