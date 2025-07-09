import QuizForm from "../components/QuizForm";

export default function CreateQuiz() {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(44,62,80,0.08)', padding: '2rem' }}>
      <h1 className="text-2xl mb-4" style={{ color: '#2563eb', fontWeight: 800, textAlign: 'center', marginBottom: '1.5rem' }}>Create Quiz</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
        Build your own quiz by adding questions and options. Give your quiz a catchy title and share it with friends!
      </p>
      <ul style={{ color: '#9333ea', marginBottom: '2rem', fontSize: '1rem', paddingLeft: '1.2rem' }}>
        <li>Add as many questions as you like</li>
        <li>Each question must have at least 2 options</li>
        <li>Mark the correct answer for each question</li>
        <li>Click "Save Quiz" when you're done</li>
      </ul>
      <div style={{
        background: 'linear-gradient(90deg, #2563eb 0%, #9333ea 60%, #ec4899 100%)',
        color: '#fff',
        borderRadius: '1.2rem',
        padding: '1.3rem 1.2rem',
        marginBottom: '2.2rem',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '1.18rem',
        boxShadow: '0 4px 18px rgba(44,62,80,0.13)',
        border: '2.5px solid #ffe066',
        outline: '2.5px solid #9333ea',
        outlineOffset: '-7px',
        letterSpacing: '0.01em',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-18px',
          left: '-18px',
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, #ffe06655 60%, transparent 100%)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-18px',
          right: '-18px',
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, #fff7b2 60%, transparent 100%)',
          zIndex: 0,
        }} />
        <span role="img" aria-label="lightbulb" style={{marginRight: '0.5rem', zIndex: 1, position: 'relative'}}>💡</span>
        <span style={{zIndex: 1, position: 'relative'}}>Tip: Make your questions clear and concise for the best quiz experience!</span>
      </div>
      <div style={{
        background: 'linear-gradient(120deg, #e0e7ef 60%, #f3f4f6 100%)',
        borderRadius: '1.5rem',
        padding: '2.2rem 1.7rem',
        marginBottom: '2.5rem',
        boxShadow: '0 6px 32px 0 rgba(44,62,80,0.13)',
        border: '3px dashed #9333ea',
        outline: '2.5px solid #2563eb',
        outlineOffset: '-8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.2s, border 0.2s',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '90px',
          height: '90px',
          background: 'radial-gradient(circle, #9333ea33 60%, transparent 100%)',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '90px',
          height: '90px',
          background: 'radial-gradient(circle, #2563eb33 60%, transparent 100%)',
          zIndex: 0,
        }} />
        <div style={{ width: '100%', zIndex: 1 }}>
          <label style={{
            fontWeight: 700,
            color: '#fff',
            fontSize: '1.13rem',
            marginBottom: '0.5rem',
            display: 'block',
            letterSpacing: '0.02em',
            background: 'linear-gradient(90deg, #9333ea 0%, #2563eb 100%)',
            borderRadius: '0.5rem 0.5rem 0 0',
            padding: '0.6rem 1rem',
            boxShadow: '0 2px 8px rgba(44,62,80,0.08)',
            border: 'none',
          }}>Questions & Options</label>
          <div style={{
            background: 'linear-gradient(90deg, #fff 70%, #e0e7ef 100%)',
            border: '2px solid #9333ea',
            borderRadius: '0 0 0.7rem 0.7rem',
            padding: '1.2rem',
            minHeight: '60px',
            color: '#444',
            fontSize: '1.08rem',
            boxShadow: '0 2px 12px rgba(44,62,80,0.09)',
            transition: 'box-shadow 0.2s',
          }}>
            {/* The actual QuizForm will render here */}
            <QuizForm />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '2.5rem', textAlign: 'center', color: '#888', fontSize: '0.95rem' }}>
        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #eee' }} />
        <p>
          Need help? Visit our <a href="/about" style={{ color: '#2563eb', textDecoration: 'underline' }}>About</a> page or contact support.<br />
          Happy quizzing! 🎉
        </p>
      </div>
    </div>
  );
}
