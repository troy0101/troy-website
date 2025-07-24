// Place your profile picture in the public/ directory as profile.jpg or update the src below.
import React from 'react';

const profilePic = '/profile.jpg'; // Place your image in public/profile.jpg

const JobHistory = () => (
  <section style={{
    background: 'rgba(30,30,40,0.85)',
    borderRadius: 18,
    padding: '2.5rem',
    marginBottom: '2.5rem',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1.5px solid rgba(255,255,255,0.12)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    width: '100%',
    maxWidth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff'
  }}>
    <h2 style={{ fontSize: '2.2rem', marginBottom: 18, fontWeight: 700, letterSpacing: 1 }}>Job History</h2>
    <ul style={{ listStyle: 'none', padding: 0, color: '#cfcfcf', fontSize: '1.1rem' }}>
      <li><strong>Security Architect</strong> – Company A (2022–Present)</li>
      <li><strong>Senior Security Engineer</strong> – Company B (2019–2022)</li>
      <li><strong>Security Analyst</strong> – Company C (2016–2019)</li>
      {/* Add more roles as needed */}
    </ul>
  </section>
);

export { profilePic, JobHistory };
