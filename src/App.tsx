import React from 'react';
import { profilePic, JobHistory } from './ProfileAndJobs';
import GameTab from './GameTab';

const glassCard: React.CSSProperties = {
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 28,
  padding: '2.5rem',
  marginBottom: '2.5rem',
  boxShadow: '0 8px 32px 0 rgba(0, 180, 216, 0.13)',
  border: '1.5px solid rgba(0,180,216,0.10)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  width: '100%',
  maxWidth: 600,
  marginLeft: 'auto',
  marginRight: 'auto',
  color: '#1a2a33',
};

const navTabs = [
  { key: 'about', label: 'About Me' },
  { key: 'jobs', label: 'Job History' },
  { key: 'thoughts', label: 'Thoughts' },
  { key: 'youtube', label: 'YouTube Video' },
  { key: 'game', label: 'Game' }
];

const AboutMe = () => (
  <section style={glassCard}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
      <img
        src={profilePic}
        alt="Troy Bloesch profile"
        style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '3px solid #0077b5', marginBottom: 8 }}
      />
      <h2 style={{ fontSize: '2.5rem', marginBottom: 8, fontWeight: 700, letterSpacing: 1 }}>Troy Bloesch</h2>
      <p style={{ fontSize: '1.2rem', color: '#1a2a33', lineHeight: 1.7, marginBottom: 18, textAlign: 'center' }}>
        Hi, I'm Troy Bloesch, CISSP. I'm passionate about cybersecurity, technology, and sharing knowledge. Welcome to my personal website where you can learn more about me, read my thoughts, and see my favorite YouTube videos.
      </p>
      <button
        style={{
          background: 'linear-gradient(90deg, #0077b5 0%, #005983 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '12px 28px',
          fontSize: '1.1rem',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 8px #0003',
          marginTop: 8
        }}
        title="LinkedIn: Troy Bloesch (not a direct link)"
        aria-label="LinkedIn: Troy Bloesch (not a direct link)"
        tabIndex={0}
      >
        LinkedIn: troy-bloesch-cissp-102b27128
      </button>
    </div>
  </section>
);

const Thoughts = () => (
  <section style={glassCard}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: 18, fontWeight: 700, letterSpacing: 1 }}>Thoughts</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div style={{ fontSize: '1.15rem', color: '#1a2a33', background: 'rgba(40,40,60,0.07)', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <strong style={{ fontSize: '1.2rem', color: '#0077b5' }}>Vibe Coding</strong>
        <div style={{ marginTop: 10, color: '#1a2a33' }}>
          Here's what I think of Vibe Coding
        </div>
      </div>
      <div style={{ fontSize: '1.15rem', color: '#1a2a33', background: 'rgba(40,40,60,0.07)', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <strong style={{ fontSize: '1.2rem', color: '#0077b5' }}>Placeholder 2</strong>
        <div style={{ marginTop: 10, color: '#1a2a33' }}>
          This is another placeholder for your thoughts.
        </div>
      </div>
      <div style={{ fontSize: '1.15rem', color: '#1a2a33', background: 'rgba(40,40,60,0.07)', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <strong style={{ fontSize: '1.2rem', color: '#0077b5' }}>Placeholder 3</strong>
        <div style={{ marginTop: 10, color: '#1a2a33' }}>
          Add more thoughts here as you like.
        </div>
      </div>
    </div>
  </section>
);

const YouTubeLinks = () => (
  <section style={glassCard}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: 18, fontWeight: 700, letterSpacing: 1 }}>Favorite YouTube Video</h2>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe width="400" height="225" style={{ borderRadius: 12, border: '2px solid #aaa', boxShadow: '0 2px 12px #0008' }} src="https://www.youtube.com/embed/eDwi-8n054s" title="Silver Springs Live" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </section>
);

const App: React.FC = () => {
  const [tab, setTab] = React.useState<'about' | 'thoughts' | 'youtube' | 'jobs' | 'game'>('about');
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #00b4d8 0%, #48cae4 100%)', fontFamily: 'system-ui, sans-serif', padding: 0, margin: 0, width: '100vw', boxSizing: 'border-box', overflowX: 'hidden' }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        padding: '2.2rem 0 1.2rem 0',
        background: 'rgba(255,255,255,0.7)',
        borderBottom: '1.5px solid #90e0ef',
        boxShadow: '0 2px 12px 0 #00b4d84d',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }}>
        {navTabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key as typeof tab)}
            style={{
              background: tab === key ? 'linear-gradient(90deg, #00b4d8 0%, #48cae4 100%)' : 'none',
              border: 'none',
              color: tab === key ? '#fff' : '#1a2a33',
              fontSize: '1.18rem',
              fontWeight: 600,
              cursor: 'pointer',
              borderBottom: tab === key ? '2.5px solid #0096c7' : 'none',
              padding: '10px 24px',
              borderRadius: 12,
              transition: 'all 0.2s',
              boxShadow: tab === key ? '0 2px 8px #00b4d84d' : 'none',
            }}
          >
            {label}
          </button>
        ))}
      </nav>
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '3.5rem 1.5rem 2rem 1.5rem', width: '100%' }}>
        {tab === 'about' && <AboutMe />}
        {tab === 'jobs' && <JobHistory />}
        {tab === 'thoughts' && <Thoughts />}
        {tab === 'youtube' && <YouTubeLinks />}
        {tab === 'game' && <GameTab />}
      </main>
    </div>
  );
};

export default App;
