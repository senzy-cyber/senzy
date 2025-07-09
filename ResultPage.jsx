export default function ResultPage({ quiz, answers }) {
  // Support both answerIndex and answer for compatibility
  const getCorrectIndex = (q) => q.answerIndex !== undefined ? q.answerIndex : q.answer;
  const correctCount = quiz.questions.reduce(
    (sum, q, i) => sum + (answers[i] === getCorrectIndex(q) ? 1 : 0), 0
  );
  return (
    <div style={{
      maxWidth: 600,
      margin: '2rem auto',
      background: '#fff',
      borderRadius: '1.2rem',
      boxShadow: '0 4px 24px 0 rgba(44,62,80,0.10)',
      padding: '2.2rem 1.7rem',
      border: '2.5px solid #9333ea',
      textAlign: 'center',
    }}>
      <h2 style={{
        color: '#2563eb',
        fontWeight: 900,
        fontSize: '2.1rem',
        marginBottom: '1.5rem',
        letterSpacing: '0.01em',
        textShadow: '0 2px 10px #fff7b2',
      }}>
        🎉 Your Score: {correctCount} / {quiz.questions.length}
      </h2>
      <div style={{ marginBottom: '2rem', color: correctCount === quiz.questions.length ? '#22c55e' : '#f59e42', fontWeight: 700, fontSize: '1.1rem' }}>
        {correctCount === quiz.questions.length ? 'Perfect! You got all questions right!' : correctCount === 0 ? 'Keep practicing! Try again!' : 'Great effort!'}
      </div>
      {quiz.questions.map((q, i) => {
        const correctIdx = getCorrectIndex(q);
        const userIdx = answers[i];
        const isCorrect = userIdx === correctIdx;
        return (
          <div key={i} style={{
            background: isCorrect ? 'linear-gradient(90deg, #d1fae5 60%, #bbf7d0 100%)' : 'linear-gradient(90deg, #fee2e2 60%, #fca5a5 100%)',
            border: isCorrect ? '2px solid #22c55e' : '2px solid #ef4444',
            borderRadius: '0.8rem',
            padding: '1.1rem',
            marginBottom: '1.2rem',
            textAlign: 'left',
            boxShadow: '0 2px 8px rgba(44,62,80,0.07)'
          }}>
            <p style={{ fontWeight: 700, color: isCorrect ? '#15803d' : '#b91c1c', fontSize: '1.08rem', marginBottom: '0.5rem' }}>{`Q${i + 1}. ${q.question}`}</p>
            <div style={{ marginBottom: '0.3rem' }}>
              <span style={{ fontWeight: 600 }}>Correct answer: </span>
              <span style={{ color: '#2563eb', fontWeight: 600 }}>{q.options[correctIdx]}</span>
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>Your answer: </span>
              <span style={{ color: isCorrect ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
                {userIdx !== undefined ? q.options[userIdx] : "No answer"}
              </span>
              {isCorrect ? (
                <span style={{ marginLeft: 10, fontWeight: 700, color: '#22c55e' }}>✔️</span>
              ) : (
                <span style={{ marginLeft: 10, fontWeight: 700, color: '#ef4444' }}>✖️</span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
