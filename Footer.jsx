
import React, { useState } from "react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsModal from "./TermsModal";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [hovered, setHovered] = useState(null);
  return (
    <footer style={{
      width: '100%',
      background: '#f3f4f6',
      color: '#9333ea',
      textAlign: 'center',
      padding: '1.2rem 0 0.7rem 0',
      fontWeight: 700,
      fontSize: '1.1rem',
      letterSpacing: '0.01em',
      borderTop: '2.5px solid #9333ea',
      marginTop: '2.5rem',
      boxShadow: '0 -2px 12px rgba(44,62,80,0.07)',
      position: 'relative',
      zIndex: 10
    }}>
      <span>
        &copy; {new Date().getFullYear()} <span style={{color:'#2563eb', fontWeight:900}}>SenzyQuiz</span> &mdash; Made with <span style={{color:'#ffe066'}}>★</span> by <span style={{color:'#2563eb'}}>Senzy Team</span>
      </span>
      <div style={{ marginTop: 10, fontWeight: 500, fontSize: '1rem', display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap', animation: 'fadeInLinks 0.7s' }}>
        <span
          style={{ cursor: 'pointer', color: hovered === 'privacy' ? '#2563eb' : '#9333ea', transition: 'color 0.2s', textDecoration: hovered === 'privacy' ? 'underline' : 'none' }}
          onClick={() => setShowPrivacy(true)}
          onMouseEnter={() => setHovered('privacy')}
          onMouseLeave={() => setHovered(null)}
        >
          Privacy Policy
        </span>
        <span
          style={{ cursor: 'pointer', color: hovered === 'terms' ? '#2563eb' : '#9333ea', transition: 'color 0.2s', textDecoration: hovered === 'terms' ? 'underline' : 'none' }}
          onClick={() => setShowTerms(true)}
          onMouseEnter={() => setHovered('terms')}
          onMouseLeave={() => setHovered(null)}
        >
          Terms & Conditions
        </span>
        <span
          style={{ color: hovered === 'contact' ? '#2563eb' : '#9333ea', cursor: 'pointer', transition: 'color 0.2s', textDecoration: hovered === 'contact' ? 'underline' : 'none' }}
          onMouseEnter={() => setHovered('contact')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => window.open('mailto:senzyteam@gmail.com', '_blank')}
        >
          Contact Us
        </span>
      </div>
      <PrivacyPolicyModal open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
      <style>{`
        @keyframes fadeInLinks { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </footer>
  );
}
