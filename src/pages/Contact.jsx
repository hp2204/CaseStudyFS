import React, { useState, useContext } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ThemeContext } from '../App';

function Contact() {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a UI demo, so no actual submission occurs.');
  };

  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh' }} className="py-5">
      <div className="container my-4">
        <div className="text-center mb-5">
          <h1 style={{ 
            fontFamily: 'Georgia, serif', 
            color: theme.text, 
            fontSize: '3rem', 
            fontWeight: 'bold' 
          }}>
            Get in Touch
          </h1>
          <p style={{ color: theme.textSecondary, fontSize: '1.1rem' }}>
            We'd love to hear from you! Reach out with questions, feedback, or special orders.
          </p>
          <div style={{ width: '80px', height: '3px', backgroundColor: theme.primary, margin: '20px auto' }}></div>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div style={{ 
              backgroundColor: theme.cardBg, 
              borderRadius: '12px', 
              padding: '2.5rem', 
              height: '100%',
              border: `2px solid ${theme.border}`
            }}>
              <h3 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '2rem' }}>Contact Information</h3>
              
              <div className="mb-4 d-flex align-items-start">
                <MapPin size={24} style={{ color: theme.primary, marginRight: '1rem', flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h5 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '0.5rem' }}>Address</h5>
                  <p style={{ color: theme.textSecondary, margin: 0 }}>
                    123 Baker Street<br/>
                    Downtown District<br/>
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <Phone size={24} style={{ color: theme.primary, marginRight: '1rem', flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h5 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '0.5rem' }}>Phone</h5>
                  <p style={{ color: theme.textSecondary, margin: 0 }}>
                    +1 (555) 123-4567<br/>
                    Mon-Sat: 8am - 8pm
                  </p>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <Mail size={24} style={{ color: theme.primary, marginRight: '1rem', flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h5 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '0.5rem' }}>Email</h5>
                  <p style={{ color: theme.textSecondary, margin: 0 }}>
                    hello@hershyskitchen.com<br/>
                    orders@hershyskitchen.com
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <Clock size={24} style={{ color: theme.primary, marginRight: '1rem', flexShrink: 0, marginTop: '4px' }} />
                <div>
                  <h5 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '0.5rem' }}>Hours</h5>
                  <p style={{ color: theme.textSecondary, margin: 0 }}>
                    Monday - Friday: 8:00 AM - 8:00 PM<br/>
                    Saturday: 9:00 AM - 9:00 PM<br/>
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div style={{ 
              backgroundColor: theme.cardBg, 
              border: `2px solid ${theme.border}`, 
              borderRadius: '12px', 
              padding: '2.5rem' 
            }}>
              <h3 style={{ color: theme.text, fontWeight: 'bold', marginBottom: '2rem' }}>Send us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label style={{ color: theme.text, fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    style={{ border: `1px solid ${theme.border}`, borderRadius: '6px', padding: '12px' }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label style={{ color: theme.text, fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    style={{ border: `1px solid ${theme.border}`, borderRadius: '6px', padding: '12px' }}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label style={{ color: theme.text, fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>
                    Message
                  </label>
                  <textarea 
                    className="form-control"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    placeholder="Tell us about your inquiry or special order..."
                    style={{ border: `1px solid ${theme.border}`, borderRadius: '6px', padding: '12px' }}
                    required
                  />
                </div>

                <button 
                  type="submit"
                  style={{ 
                    backgroundColor: theme.primary, 
                    color: 'white', 
                    border: 'none', 
                    padding: '12px 32px', 
                    borderRadius: '6px',
                    fontWeight: '600',
                    width: '100%',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;