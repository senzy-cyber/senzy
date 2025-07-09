import React from "react";

export default function FreeSoftwares() {
  const bluestacksLogo = "https://cdn-www.bluestacks.com/bs-images/logo-icon.png";
  return (
    <div style={{ maxWidth: 900, margin: '3rem auto', padding: '0 1rem' }}>
      <h2 style={{ color: '#2563eb', fontWeight: 900, fontSize: '2rem', marginBottom: '2.2rem', letterSpacing: '0.01em', textAlign: 'center' }}>Free Softwares</h2>
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* Left: Logo */}
        <div style={{ flex: '0 0 180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '1.2rem', boxShadow: '0 4px 24px 0 rgba(44,62,80,0.10)', padding: '2.2rem 1.7rem', border: '2.5px solid #2563eb', minHeight: 220 }}>
          <img src={bluestacksLogo} alt="BlueStacks Logo" style={{ width: 90, height: 90, objectFit: 'contain', marginBottom: 18 }} />
          <span style={{ color: '#2563eb', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.01em', textAlign: 'center' }}>BlueStacks</span>
        </div>
        {/* Right: Card */}
        <div style={{ background: '#fff', borderRadius: '1.2rem', boxShadow: '0 4px 24px 0 rgba(44,62,80,0.10)', padding: '2.2rem 1.7rem', border: '2.5px solid #9333ea', textAlign: 'center', maxWidth: 400, minWidth: 260, flex: '1 1 320px' }}>
          <h3 style={{ color: '#9333ea', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.7rem' }}>Bluestacks 5 Installer</h3>
          <p style={{ color: '#444', marginBottom: '1.2rem' }}>
            Download the official BlueStacks Android emulator for Windows. Run Android apps and games on your PC easily.
          </p>
          {/* Nougat 32-bit */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#043356', borderRadius: '0.7rem', padding: '0.7rem 1.2rem', marginBottom: '1rem' }}>
            <span style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem' }}>Nougat 32-bit</span>
            <a
              href="/downloads/BluestacksInstaller.exe"
              download
              style={{
                background: 'none',
                color: '#3fa7ff',
                border: '2px solid #3fa7ff',
                borderRadius: '0.5rem',
                padding: '0.5rem 1.5rem',
                fontWeight: 600,
                fontSize: '1.05rem',
                boxShadow: 'none',
                cursor: 'pointer',
                letterSpacing: '0.01em',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
                display: 'inline-block',
              }}
            >
              Download
            </a>
          </div>
       {/* Nougat 64-bit */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#043356', borderRadius: '0.7rem', padding: '0.7rem 1.2rem', marginBottom: '1rem' }}>
            <span style={{ color: '#fff', fontWeight: 500, fontSize: '1.1rem' }}>Nougat 64-bit</span>
            <a
              href="/downloads/BluestacksInstaller.exe"
              download
              style={{
                background: 'none',
                color: '#3fa7ff',
                border: '2px solid #3fa7ff',
                borderRadius: '0.5rem',
                padding: '0.5rem 1.5rem',
                fontWeight: 600,
                fontSize: '1.05rem',
                boxShadow: 'none',
                cursor: 'pointer',
                letterSpacing: '0.01em',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
                display: 'inline-block',
              }}
            >
              Download
            </a>
          </div>
    
        </div>
      </div>
    </div>
  );
}
