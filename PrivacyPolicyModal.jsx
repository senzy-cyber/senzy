import React from "react";

export default function PrivacyPolicyModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'fadeIn 0.3s'
    }}>
      <div style={{
        background: '#fff', borderRadius: '1rem', padding: '2rem', maxWidth: 500, width: '90%',
        boxShadow: '0 4px 32px rgba(44,62,80,0.15)', position: 'relative', animation: 'slideUp 0.4s'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#9333ea' }}>&times;</button>
        <h2 style={{ color: '#2563eb', fontWeight: 800, marginBottom: 12 }}>Privacy Policy</h2>
        <p style={{ color: '#444', fontSize: 15, lineHeight: 1.7 }}>
          We respect your privacy. No personal data is collected or shared. All quiz data is anonymous and only used to improve your experience.
        </p>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}
