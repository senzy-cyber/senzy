import React from "react";

export default function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#06213a', borderRadius: '1.5rem', boxShadow: '0 4px 24px 0 rgba(44,62,80,0.10)', margin: '3rem auto', maxWidth: 800, padding: '2.5rem 1.5rem' }}>
      <h1 style={{ color: '#fff', fontWeight: 900, fontSize: '2.2rem', marginBottom: '1.5rem', letterSpacing: '0.01em', textAlign: 'center', animation: 'fadeIn 1.2s' }}>
        Welcome to SenzyQuiz!
      </h1>
      <p style={{ color: '#b5c7d3', fontSize: '1.2rem', margin: '1.5rem 0 0 0', textAlign: 'center', maxWidth: 600, animation: 'fadeIn 2s' }}>
        SenzyQuiz is your modern platform to create, share, and take quizzes. Explore quizzes, challenge your friends, and grow your knowledge!
        <br />
        <br />
        <span style={{ fontStyle: 'italic', color: '#9333ea', animation: 'fadeInNote 1s' }}>
          Please review these terms regularly to stay informed of any changes.
        </span>
        
      </p>

      <div style={{ display: 'flex', gap: '2.2rem', margin: '2.5rem 0 0 0', flexWrap: 'wrap', justifyContent: 'center' }}>
         <a
          href="https://tiktok.com/senzy_ff_"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#3fa7ff',
            fontWeight: 700,
            fontSize: '1.25rem',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '2px solid #3fa7ff',
            borderRadius: 8,
            padding: '0.3rem 1.1rem',
            background: 'rgba(36, 60, 100, 0.18)',
            boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
            transition: 'all 0.2s',
            marginBottom: 8,
          }}
          onMouseOver={e => {
            e.currentTarget.style.color = '#9333ea';
            e.currentTarget.style.borderBottom = '2px solid #9333ea';
            e.currentTarget.style.background = 'rgba(147, 51, 234, 0.10)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.color = '#3fa7ff';
            e.currentTarget.style.borderBottom = '2px solid #3fa7ff';
            e.currentTarget.style.background = 'rgba(36, 60, 100, 0.18)';
          }}
        >
          <i className="fab fa-tiktok" style={{ fontSize: '1.5rem', marginRight: 8 }}></i> TikTok
        </a>
        <a
          href="https://instagram.com/senzy_ff_"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#3fa7ff',
            fontWeight: 700,
            fontSize: '1.25rem',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '2px solid #3fa7ff',
            borderRadius: 8,
            padding: '0.3rem 1.1rem',
            background: 'rgba(36, 60, 100, 0.18)',
            boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
            transition: 'all 0.2s',
            marginBottom: 8,
          }}
          onMouseOver={e => {
            e.currentTarget.style.color = '#9333ea';
            e.currentTarget.style.borderBottom = '2px solid #9333ea';
            e.currentTarget.style.background = 'rgba(147, 51, 234, 0.10)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.color = '#3fa7ff';
            e.currentTarget.style.borderBottom = '2px solid #3fa7ff';
            e.currentTarget.style.background = 'rgba(36, 60, 100, 0.18)';
          }}
        >
          <i className="fab fa-instagram" style={{ fontSize: '1.5rem', marginRight: 8 }}></i> Instagram
        </a>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
