import React from 'react';

function About() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div style={{ backgroundColor: '#F5E6D3', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '8rem', marginBottom: '1rem' }}>👨‍🍳</div>
            <h3 style={{ color: '#6B4423', fontFamily: 'Georgia, serif', fontWeight: 'bold' }}>
              Established 2018
            </h3>
          </div>
        </div>
        <div className="col-lg-6">
          <h1 style={{ fontFamily: 'Georgia, serif', color: '#6B4423', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Our Story
          </h1>
          <div style={{ width: '80px', height: '3px', backgroundColor: '#D4A574', marginBottom: '2rem' }}></div>
          <p style={{ color: '#8B6F47', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Hershy's Kitchen began with a simple dream: to bring the warmth and comfort of homemade baking to our community. What started in a small home kitchen has grown into a beloved local destination for those seeking authentic, handcrafted treats.
          </p>
          <p style={{ color: '#8B6F47', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Every recipe we use has been perfected over years, blending traditional techniques with creative innovation. We believe that the best food comes from the heart, made with quality ingredients and genuine care.
          </p>
        </div>
      </div>

      <div className="row g-4 my-5">
        <div className="col-md-4">
          <div className="text-center p-4" style={{ backgroundColor: '#FFF8F0', borderRadius: '12px', height: '100%' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🌟</div>
            <h4 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>Our Mission</h4>
            <p style={{ color: '#8B6F47', lineHeight: '1.7' }}>
              To create memorable moments through exceptional baked goods that bring people together and celebrate life's sweet occasions.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center p-4" style={{ backgroundColor: '#FFF8F0', borderRadius: '12px', height: '100%' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🤝</div>
            <h4 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>Our Values</h4>
            <p style={{ color: '#8B6F47', lineHeight: '1.7' }}>
              Quality, authenticity, and community are at the heart of everything we do. We source locally and support sustainable practices.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="text-center p-4" style={{ backgroundColor: '#FFF8F0', borderRadius: '12px', height: '100%' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>💡</div>
            <h4 style={{ color: '#6B4423', fontWeight: 'bold', marginBottom: '1rem' }}>Our Promise</h4>
            <p style={{ color: '#8B6F47', lineHeight: '1.7' }}>
              Every item that leaves our kitchen is made fresh daily with premium ingredients and the same care we'd use for our own family.
            </p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#F5E6D3', borderRadius: '12px', padding: '3rem', textAlign: 'center', marginTop: '4rem' }}>
        <h2 style={{ color: '#6B4423', fontFamily: 'Georgia, serif', fontWeight: 'bold', marginBottom: '1rem' }}>
          "Baking is love made visible"
        </h2>
        <p style={{ color: '#8B6F47', fontSize: '1.1rem', fontStyle: 'italic' }}>— Chef Hershy, Founder</p>
      </div>
    </div>
  );
}

export default About;