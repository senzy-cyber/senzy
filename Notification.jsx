import React from "react";

export default function Notification({ open, onClose, message }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', bottom: 30, right: 30, zIndex: 2000,
      background: '#2563eb', color: '#fff', padding: '1.1rem 2rem', borderRadius: '1.5rem',
      boxShadow: '0 4px 24px rgba(44,62,80,0.18)', fontWeight: 700, fontSize: 18,
      display: 'flex', alignItems: 'center', gap: 16, animation: 'notifIn 0.5s'
    }}>
      <span style={{ flex: 1 }}>{message}</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 22, cursor: 'pointer', fontWeight: 900, marginLeft: 10 }}>&times;</button>
      <style>{`
        @keyframes notifIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
