import React from "react";

export default function TermsModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.4)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'fadeIn 0.3s', fontFamily: 'Poppins, Segoe UI, Arial, sans-serif'
    }}>
      <div style={{
        background: '#fff', borderRadius: '1rem', padding: '2rem', maxWidth: 500, width: '90%',
        boxShadow: '0 4px 32px rgba(44,62,80,0.15)', position: 'relative', animation: 'slideUp 0.4s',
        fontFamily: 'Poppins, Segoe UI, Arial, sans-serif'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#9333ea' }}>&times;</button>
        <h2 style={{ color: '#2563eb', fontWeight: 800, marginBottom: 12 }}>Terms & Conditions</h2>
        <div style={{ color: '#444', fontSize: 15, lineHeight: 1.7, animation: 'fadeInText 0.7s', fontFamily: 'Poppins, Segoe UI, Arial, sans-serif' }}>
          <p style={{ marginBottom: 12 }}>
            By using SenzyQuiz, you agree to use the platform for educational purposes only. No misuse, redistribution, or commercial use is allowed without permission.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 12, animation: 'slideInList 0.8s' }}>
            <li style={{ marginBottom: 6 }}>Respect all users and do not engage in any form of harassment or abuse.</li>
            <li style={{ marginBottom: 6 }}>Do not attempt to hack, disrupt, or misuse the platform in any way.</li>
            <li style={{ marginBottom: 6 }}>All content is provided "as is" without warranty of any kind.</li>
            <li style={{ marginBottom: 6 }}>We reserve the right to update these terms at any time without prior notice.</li>
            <li style={{ marginBottom: 6 }}>Violation of these terms may result in suspension or permanent ban from SenzyQuiz.</li>
          </ul>
          <p style={{ fontStyle: 'italic', color: '#9333ea', animation: 'fadeInNote 1s' }}>
            Please review these terms regularly to stay informed of any changes.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeInText { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInList { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInNote { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
