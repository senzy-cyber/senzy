import { useParams } from "react-router-dom";
import QuizPlayer from "../components/QuizPlayer";

// All MCQs removed for Chemistry, Physics, Computer, and Class 10
const classMCQs = {};

export default function ClassQuiz() {
  const { classNum } = useParams();
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(44,62,80,0.08)', padding: '2rem' }}>
      <h1 style={{ color: '#2563eb', fontWeight: 800, textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', letterSpacing: '0.01em' }}>
        Selected Class: {classNum}
      </h1>
      <QuizPlayer />
    </div>
  );
}
