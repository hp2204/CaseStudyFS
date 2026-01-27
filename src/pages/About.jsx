import React, { useContext } from 'react';
import { ThemeContext } from '../App';

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh' }} className="py-5">
      <div className="container my-4">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div style={{ 
              backgroundColor: theme.accent, 
              borderRadius: '12px', 
              padding: '3rem', 
              textAlign: 'center',
              border: `2px solid ${theme.border}`
            }}>
              <div style={{ fontSize: '8rem', marginBottom: '1rem' }}>👨‍🍳</div>
              <h3 style={{ color: theme.text, fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
                Established 2018
              </h3>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 style={{ 
              fontFamily: 'Georgia, serif', 
              color: theme.text, 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem' 
            }}>
              Our Story
            </h1>
            <div style={{ width: '80px', height: '3px', backgroundColor: theme.primary, marginBottom: '2rem' }}></div>
            <p style={{ color: theme.textSecondary, fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Hershy's Kitchen began with a simple dream: to bring the warmth and comfort of homemade baking to our community. What started in a small home kitchen has grown into a beloved local destination for those seeking authentic, handcrafted treats.
            </p>
            <p style={{ color: theme.textSecondary, fontSize: '1.1rem', lineHeight: '1.8' }}>
              Every recipe we use has been perfected over years, blending traditional techniques with creative innovation. We believe that the best food comes from the heart, made with quality ingredients and genuine care.
            </p>
          </div>
        </div>

        <div className="row g-4 my-5">
          <div className="col-md-4">
            <div className="text-center p-4" style={{ 
              backgroundColor: theme.cardBg, 
              borderRadius: '12px', 
              height: '100%',
              border: `2px solid ${theme.border}`
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🌟</div>
              <h4 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '1rem' }}>Our Mission</h4>
              <p style={{ color: theme.textSecondary, lineHeight: '1.7' }}>
                To create memorable moments through exceptional baked goods that bring people together and celebrate life's sweet occasions.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4" style={{ 
              backgroundColor: theme.cardBg, 
              borderRadius: '12px', 
              height: '100%',
              border: `2px solid ${theme.border}`
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🤝</div>
              <h4 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '1rem' }}>Our Values</h4>
              <p style={{ color: theme.textSecondary, lineHeight: '1.7' }}>
                Quality, authenticity, and community are at the heart of everything we do. We source locally and support sustainable practices.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center p-4" style={{ 
              backgroundColor: theme.cardBg, 
              borderRadius: '12px', 
              height: '100%',
              border: `2px solid ${theme.border}`
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💡</div>
              <h4 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '1rem' }}>Our Promise</h4>
              <p style={{ color: theme.textSecondary, lineHeight: '1.7' }}>
                Every item that leaves our kitchen is made fresh daily with premium ingredients and the same care we'd use for our own family.
              </p>
            </div>
          </div>
        </div>

        <div style={{ 
          backgroundColor: theme.accent, 
          borderRadius: '12px', 
          padding: '3rem', 
          textAlign: 'center', 
          marginTop: '4rem',
          border: `2px solid ${theme.border}`
        }}>
          <h2 style={{ 
            color: theme.text, 
            fontFamily: 'Georgia, serif', 
            fontWeight: 'bold', 
            marginBottom: '1rem' 
          }}>
            "Baking is love made visible"
          </h2>
          <p style={{ color: theme.textSecondary, fontSize: '1.1rem', fontStyle: 'italic' }}>
            — Chef Hershy, Founder
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;