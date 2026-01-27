import React, { useContext, useState } from 'react';
import { Package, Clock, CheckCircle, XCircle, Truck } from 'lucide-react';
import { ThemeContext } from '../App';

function MyOrders() {
  const { theme } = useContext(ThemeContext);
  const [selectedTab, setSelectedTab] = useState('all');

  const orders = [
    {
      id: 'ORD001',
      date: 'Jan 23, 2026',
      items: ['Paneer Tikka', 'Butter Chicken', 'Veg Biryani'],
      total: 824,
      status: 'delivered',
      emoji: '🍛'
    },
    {
      id: 'ORD002',
      date: 'Jan 22, 2026',
      items: ['Margherita Pizza', 'Garlic Bread'],
      total: 448,
      status: 'on-the-way',
      emoji: '🍕'
    },
    {
      id: 'ORD003',
      date: 'Jan 21, 2026',
      items: ['Masala Chai', 'Samosa (4 pcs)'],
      total: 137,
      status: 'preparing',
      emoji: '🍵'
    },
    {
      id: 'ORD004',
      date: 'Jan 20, 2026',
      items: ['Gulab Jamun', 'Rasgulla'],
      total: 168,
      status: 'delivered',
      emoji: '🍮'
    },
    {
      id: 'ORD005',
      date: 'Jan 19, 2026',
      items: ['Hakka Noodles', 'Spring Rolls'],
      total: 348,
      status: 'cancelled',
      emoji: '🍜'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle size={24} color="#4CAF50" />;
      case 'on-the-way':
        return <Truck size={24} color="#2196F3" />;
      case 'preparing':
        return <Clock size={24} color="#FF9800" />;
      case 'cancelled':
        return <XCircle size={24} color="#F44336" />;
      default:
        return <Package size={24} color={theme.primary} />;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'on-the-way':
        return 'On the Way';
      case 'preparing':
        return 'Preparing';
      case 'cancelled':
        return 'Cancelled';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered':
        return '#4CAF50';
      case 'on-the-way':
        return '#2196F3';
      case 'preparing':
        return '#FF9800';
      case 'cancelled':
        return '#F44336';
      default:
        return theme.primary;
    }
  };

  const filteredOrders = selectedTab === 'all' 
    ? orders 
    : orders.filter(order => order.status === selectedTab);

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh', paddingBottom: '3rem' }}>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 style={{ fontFamily: 'Georgia, serif', color: theme.text, fontSize: '3rem', fontWeight: 'bold' }}>
            <Package size={50} style={{ marginRight: '1rem', verticalAlign: 'middle' }} />
            My Orders
          </h1>
          <p style={{ color: theme.textSecondary, fontSize: '1.1rem' }}>
            Track and manage your orders
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          backgroundColor: theme.cardBg,
          borderRadius: '12px',
          padding: '1rem',
          marginBottom: '2rem',
          border: `2px solid ${theme.border}`,
          overflowX: 'auto'
        }}>
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            {[
              { id: 'all', label: 'All Orders' },
              { id: 'preparing', label: 'Preparing' },
              { id: 'on-the-way', label: 'On the Way' },
              { id: 'delivered', label: 'Delivered' },
              { id: 'cancelled', label: 'Cancelled' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: selectedTab === tab.id ? theme.primary : 'transparent',
                  color: selectedTab === tab.id ? 'white' : theme.text,
                  cursor: 'pointer',
                  fontWeight: selectedTab === tab.id ? 'bold' : 'normal',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedTab !== tab.id) {
                    e.target.style.backgroundColor = theme.accent;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedTab !== tab.id) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            backgroundColor: theme.cardBg,
            borderRadius: '16px',
            border: `2px solid ${theme.border}`
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>📦</div>
            <h3 style={{ color: theme.text, marginBottom: '1rem' }}>No orders found</h3>
            <p style={{ color: theme.textSecondary }}>You haven't placed any orders yet</p>
          </div>
        ) : (
          <div className="row g-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="col-12">
                <div
                  style={{
                    backgroundColor: theme.cardBg,
                    borderRadius: '16px',
                    padding: '2rem',
                    border: `2px solid ${theme.border}`,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)';
                    e.currentTarget.style.borderColor = theme.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = theme.border;
                  }}
                >
                  <div className="row align-items-center">
                    <div className="col-md-1 text-center mb-3 mb-md-0">
                      <div style={{ fontSize: '3rem' }}>{order.emoji}</div>
                    </div>

                    <div className="col-md-7">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <h4 style={{ color: theme.text, fontWeight: 'bold', margin: 0 }}>
                          Order #{order.id}
                        </h4>
                        <span style={{
                          backgroundColor: `${getStatusColor(order.status)}20`,
                          color: getStatusColor(order.status),
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          {getStatusIcon(order.status)}
                          {getStatusText(order.status)}
                        </span>
                      </div>
                      <p style={{ color: theme.textSecondary, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                        {order.date}
                      </p>
                      <p style={{ color: theme.text, marginBottom: 0 }}>
                        {order.items.join(', ')}
                      </p>
                    </div>

                    <div className="col-md-2 text-center">
                      <p style={{ color: theme.primary, fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>
                        ₹{order.total}
                      </p>
                    </div>

                    <div className="col-md-2 text-center">
                      <button
                        style={{
                          backgroundColor: theme.primary,
                          color: 'white',
                          border: 'none',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          width: '100%',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        {order.status === 'delivered' ? 'Reorder' : 'Track'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrders;