import { useParams } from "react-router-dom";
import QuizPlayer from "../components/QuizPlayer";

export default function TakeQuiz() {
  const { id } = useParams();
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(44,62,80,0.08)', padding: '2rem' }}>
      <h1 style={{ color: '#2563eb', fontWeight: 800, textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', letterSpacing: '0.01em' }}>Take Quiz</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', fontSize: '1.08rem' }}>
        Answer the questions below and test your knowledge! Good luck!
      </p>
      <QuizPlayer quizId={id} />
      <div style={{ marginTop: '2.5rem', textAlign: 'center', color: '#888', fontSize: '0.95rem' }}>
        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #eee' }} />
        <p>
          Want to create your own quiz? <a href="/create" style={{ color: '#9333ea', textDecoration: 'underline' }}>Start here</a>.<br />
          Enjoy learning and have fun! 🎯
 
        </p>
      </div>
    </div>
  );
}
