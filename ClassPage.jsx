import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const classNames = {
  5: "Class 5",
  6: "Class 6",
  7: "Class 7",
  8: "Class 8",
  9: "Class 9",
  10: "Class 10"
};

export default function ClassPage() {
  const { classNum } = useParams();
  const navigate = useNavigate();
  const classLabel = classNames[classNum] || `Class ${classNum}`;

  // Only class 10 has quizzes for now
  if (classNum === "10") {
    return (
      <div style={{ maxWidth: 600, margin: '2rem auto', background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(44,62,80,0.08)', padding: '2rem' }}>
        <h1 style={{ color: '#9333ea', fontWeight: 800, textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', letterSpacing: '0.01em' }}>Quiz Subjects for Class 10</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center', marginTop: '2rem' }}>
          <button onClick={() => navigate('/quiz/10-chemistry')} style={btnStyle('#2563eb', '#9333ea')}>Chemistry MCQs</button>
          <button onClick={() => navigate('/quiz/10-physics')} style={btnStyle('#9333ea', '#2563eb')}>Physics MCQs</button>
          <button onClick={() => navigate('/quiz/10-computer')} style={btnStyle('#ec4899', '#2563eb')}>Computer MCQs</button>
        </div>
      </div>
    );
  }

  // For other classes, show coming soon
  return (
    <div style={{ maxWidth: 500, margin: '3rem auto', background: '#fff', borderRadius: '1.2rem', boxShadow: '0 4px 24px 0 rgba(44,62,80,0.10)', padding: '2.2rem 1.7rem', border: '2.5px solid #9333ea', textAlign: 'center' }}>
      <h2 style={{ color: '#2563eb', fontWeight: 900, fontSize: '2rem', marginBottom: '1.5rem', letterSpacing: '0.01em' }}>{classLabel} Quizzes</h2>
      <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>🚧</div>
      <div style={{ color: '#9333ea', fontWeight: 600, fontSize: '1.1rem' }}>Quizzes for {classLabel} are coming soon!</div>
      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => navigate('/')} style={{ background: '#eee', color: '#9333ea', border: 'none', borderRadius: '0.7rem', padding: '0.6rem 1.7rem', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', letterSpacing: '0.01em', transition: 'background 0.2s' }}>Back to Home</button>
      </div>
    </div>
  );
}

function btnStyle(from, to) {
  return {
    background: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`,
    color: '#fff',
    border: 'none',
    borderRadius: '0.7rem',
    padding: '0.9rem 2.5rem',
    fontWeight: 700,
    fontSize: '1.15rem',
    boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
    cursor: 'pointer',
    margin: '0.5rem 0',
    letterSpacing: '0.01em',
    transition: 'background 0.2s',
    width: 260,
    maxWidth: '90%',
  };
}
