import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat, Mail, Lock, Gift } from 'lucide-react';
import { ThemeContext } from '../App';

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    // For demo purposes, any email/password works
    alert('Login successful! Welcome to Hershy\'s Kitchen! 🎉');
    navigate('/');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: `linear-gradient(135deg, ${theme.accent}, ${theme.primary})`,
      padding: '2rem'
    }}>
      <div style={{
        background: theme.cardBg,
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        maxWidth: '450px',
        width: '100%'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <ChefHat size={64} color={theme.primary} style={{ marginBottom: '1rem' }} />
          <h1 style={{ color: theme.text, fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Georgia, serif' }}>
            Hershy's Kitchen
          </h1>
          <p style={{ color: theme.textSecondary }}>Welcome back! Please login to continue</p>
        </div>

        {/* First Time Offer Banner */}
        <div style={{
          background: `${theme.primary}20`,
          border: `2px solid ${theme.primary}`,
          borderRadius: '12px',
          padding: '1rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <Gift size={32} color={theme.primary} style={{ marginBottom: '0.5rem' }} />
          <div style={{ color: theme.primary, fontWeight: 'bold', fontSize: '1.1rem' }}>
            🎉 First Time User Offer!
          </div>
          <div style={{ color: theme.text, fontSize: '0.95rem', marginTop: '0.5rem' }}>
            Get 20% OFF on your first order
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              color: theme.text, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              <Mail size={20} /> Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '8px',
                border: `2px solid ${theme.border}`,
                background: theme.bg,
                color: theme.text,
                fontSize: '1rem'
              }}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              color: theme.text, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: '0.5rem',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}>
              <Lock size={20} /> Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '8px',
                border: `2px solid ${theme.border}`,
                background: theme.bg,
                color: theme.text,
                fontSize: '1rem'
              }}
            />
          </div>

          {error && (
            <div style={{
              background: '#FF634720',
              border: '2px solid #FF6347',
              color: '#FF6347',
              padding: '0.75rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              background: theme.primary,
              color: '#FFF',
              border: 'none',
              padding: '1.2rem',
              borderRadius: '8px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Login
          </button>
        </form>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem', 
          color: theme.textSecondary, 
          fontSize: '0.9rem'
        }}>
          For demo purposes, enter any email and password
        </div>
      </div>
    </div>
  );
};

export default Login;