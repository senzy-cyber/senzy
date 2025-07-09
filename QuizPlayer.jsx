
import React, { useState } from "react";

export default function QuizPlayer() {
  // Demo MCQs for Class 6 English
  const mcqs = [
    {
      question: "What is the plural of 'child'?",
      options: ["childs", "childes", "children", "childrens"],
      answer: 2
    },
    {
      question: "Which word is a noun?",
      options: ["run", "quickly", "happiness", "blue"],
      answer: 2
    },
    {
      question: "Choose the correct spelling:",
      options: ["Recieve", "Receive", "Receeve", "Receve"],
      answer: 1
    },
    {
      question: "Which is a verb?",
      options: ["book", "write", "table", "red"],
      answer: 1
    },
    {
      question: "What is the opposite of 'happy'?",
      options: ["sad", "glad", "good", "tall"],
      answer: 0
    },
  ];

  const [currentMcq, setCurrentMcq] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSet, setSelectedSet] = useState(null);

  // Only classes 6 and 7 have subject selection
  const showSubjects = selectedClass === 6 || selectedClass === 7;
  const subjects = [
    { name: "English", sets: ["Set 1", "Set 2"] },
    { name: "Urdu", sets: ["Set 1", "Set 2"] },
    { name: "Science", sets: ["Set 1", "Set 2"] },
    { name: "Islamiyat", sets: ["Set 1", "Set 2"] },
  ];

  return (
    <div style={{ maxWidth: 500, margin: '3rem auto', background: '#fff', borderRadius: '1.2rem', boxShadow: '0 4px 24px 0 rgba(44,62,80,0.10)', padding: '2.2rem 1.7rem', border: '2.5px solid #9333ea', textAlign: 'center' }}>
      {!selectedClass && (
        <>
          <h2 style={{ color: '#2563eb', fontWeight: 900, fontSize: '2rem', marginBottom: '2.2rem', letterSpacing: '0.01em', textAlign: 'center' }}>
            Select Your Class
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
            {[6, 7, 8, 9, 10].map(cls => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                style={{
                  background: 'linear-gradient(90deg, #2563eb 0%, #9333ea 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.7rem',
                  padding: '0.7rem 2.2rem',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'background 0.2s',
                  width: 220,
                  textAlign: 'center',
                }}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </>
      )}

      {selectedClass && showSubjects && !selectedSubject && (
        <>
          <h2 style={{ color: '#9333ea', fontWeight: 900, fontSize: '1.7rem', marginBottom: '2.2rem', letterSpacing: '0.01em', textAlign: 'center' }}>
            Select Subject for Class {selectedClass}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            {subjects.map(subj => (
              <button
                key={subj.name}
                onClick={() => setSelectedSubject(subj.name)}
                style={{
                  background: 'linear-gradient(90deg, #9333ea 0%, #2563eb 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.7rem',
                  padding: '0.7rem 2.2rem',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'background 0.2s',
                  width: 220,
                  textAlign: 'center',
                }}
              >
                {subj.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => setSelectedClass(null)}
            style={{
              background: '#f3f4f6',
              color: '#9333ea',
              border: '1.5px solid #9333ea',
              borderRadius: '0.7rem',
              padding: '0.6rem 2.2rem',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
              width: 180,
              textAlign: 'center',
              transition: 'background 0.2s',
            }}
          >
            Back
          </button>
        </>
      )}

      {/* If any subject is selected, show Set 1 and Set 2, and for Class 6 English show MCQs only after set selection */}
      {selectedClass && showSubjects && selectedSubject && (
        <>
          {/* Show set selection for all subjects, including Class 6 English */}
          {!selectedSet && (
            <>
              <h2 style={{ color: '#2563eb', fontWeight: 900, fontSize: '1.5rem', marginBottom: '1.5rem', letterSpacing: '0.01em', textAlign: 'center' }}>
                Select Set for {selectedSubject}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '1.2rem', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {subjects.find(s => s.name === selectedSubject)?.sets.map(setName => (
                  <button
                    key={setName}
                    onClick={() => setSelectedSet(setName)}
                    style={{
                      background: '#9333ea',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0.7rem',
                      padding: '0.7rem 2.2rem',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      transition: 'background 0.2s',
                      width: 120,
                      textAlign: 'center',
                    }}
                  >
                    {setName}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setSelectedSubject(null)}
                style={{
                  background: '#f3f4f6',
                  color: '#9333ea',
                  border: '1.5px solid #9333ea',
                  borderRadius: '0.7rem',
                  padding: '0.6rem 2.2rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: '0.5rem',
                  width: 180,
                  textAlign: 'center',
                  transition: 'background 0.2s',
                }}
              >
                Back
              </button>
            </>
          )}
          {/* For Class 6 English, show quiz after set selection */}
          {selectedSet && selectedClass === 6 && selectedSubject === "English" && (
            <>
              {!showResult ? (
                <>
                  <h2 style={{ color: '#2563eb', fontWeight: 900, fontSize: '1.5rem', marginBottom: '1.5rem', letterSpacing: '0.01em', textAlign: 'center' }}>
                    English Quiz (Class 6) - {selectedSet}
                  </h2>
                  <div style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '1.1rem' }}>
                    Q{currentMcq + 1}: {mcqs[currentMcq].question}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                    {mcqs[currentMcq].options.map((opt, idx) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedOption(idx)}
                        style={{
                          background:
                            selectedOption === null
                              ? '#9333ea'
                              : idx === mcqs[currentMcq].answer
                                ? (selectedOption === idx ? '#16a34a' : '#22d3ee') // green for correct, cyan for correct but not selected
                                : (selectedOption === idx ? '#dc2626' : '#9333ea'), // red for wrong selected, purple for others
                          color: '#fff',
                          border: 'none',
                          borderRadius: '0.7rem',
                          padding: '0.7rem 2.2rem',
                          fontWeight: 700,
                          fontSize: '1.1rem',
                          boxShadow: '0 2px 8px rgba(44,62,80,0.10)',
                          cursor: selectedOption === null ? 'pointer' : 'default',
                          textDecoration: 'none',
                          letterSpacing: '0.01em',
                          transition: 'background 0.2s',
                          width: 220,
                          textAlign: 'center',
                          opacity: selectedOption !== null && selectedOption !== idx ? 0.7 : 1,
                        }}
                        disabled={selectedOption !== null}
                      >
                        {opt}
                        {selectedOption !== null && idx === mcqs[currentMcq].answer && (
                          <span style={{ marginLeft: 8, fontWeight: 800 }}>
                            ✓
                          </span>
                        )}
                        {selectedOption !== null && selectedOption === idx && idx !== mcqs[currentMcq].answer && (
                          <span style={{ marginLeft: 8, fontWeight: 800 }}>
                            ✗
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                  <div>
                    {selectedOption !== null && (
                      <button
                        onClick={() => {
                          if (selectedOption === mcqs[currentMcq].answer) setScore(score + 1);
                          setSelectedOption(null);
                          if (currentMcq < mcqs.length - 1) {
                            setCurrentMcq(currentMcq + 1);
                          } else {
                            setShowResult(true);
                          }
                        }}
                        style={{
                          background: '#2563eb',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '0.7rem',
                          padding: '0.6rem 2.2rem',
                          fontWeight: 700,
                          fontSize: '1rem',
                          cursor: 'pointer',
                          marginTop: '0.5rem',
                          width: 180,
                          textAlign: 'center',
                          transition: 'background 0.2s',
                        }}
                      >
                        {currentMcq < mcqs.length - 1 ? 'Next' : 'Finish'}
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h2 style={{ color: '#9333ea', fontWeight: 900, fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.01em', textAlign: 'center' }}>
                    Quiz Complete!
                  </h2>
                  <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#2563eb' }}>
                    Your Score: {score} / {mcqs.length}
                  </div>
                  <button
                    onClick={() => {
                      setCurrentMcq(0);
                      setScore(0);
                      setShowResult(false);
                      setSelectedSet(null);
                    }}
                    style={{
                      background: '#9333ea',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0.7rem',
                      padding: '0.6rem 2.2rem',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      marginTop: '1.2rem',
                      width: 180,
                      textAlign: 'center',
                      transition: 'background 0.2s',
                    }}
                  >
                    Try Again
                  </button>
                </div>
              )}
            </>
          )}
          {/* For other subjects, just show set selection (no quiz logic here) */}
          {selectedSet && !(selectedClass === 6 && selectedSubject === "English") && (
            <>
              <h2 style={{ color: '#9333ea', fontWeight: 900, fontSize: '1.5rem', marginBottom: '1.5rem', letterSpacing: '0.01em', textAlign: 'center' }}>
                No quiz available for {selectedSubject} ({selectedSet}) yet.
              </h2>
              <button
                onClick={() => setSelectedSet(null)}
                style={{
                  background: '#f3f4f6',
                  color: '#9333ea',
                  border: '1.5px solid #9333ea',
                  borderRadius: '0.7rem',
                  padding: '0.6rem 2.2rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  marginTop: '0.5rem',
                  width: 180,
                  textAlign: 'center',
                  transition: 'background 0.2s',
                }}
              >
                Back
              </button>
            </>
          )}
        </>
      )}

      {selectedClass && !showSubjects && (
        <>
          <h2 style={{ color: '#9333ea', fontWeight: 900, fontSize: '1.7rem', marginBottom: '2.2rem', letterSpacing: '0.01em', textAlign: 'center' }}>
            No subjects available for Class {selectedClass}.
          </h2>
          <button
            onClick={() => setSelectedClass(null)}
            style={{
              background: '#f3f4f6',
              color: '#9333ea',
              border: '1.5px solid #9333ea',
              borderRadius: '0.7rem',
              padding: '0.6rem 2.2rem',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
              width: 180,
              textAlign: 'center',
              transition: 'background 0.2s',
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

