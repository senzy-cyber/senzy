import { Link, useNavigate } from "react-router-dom";
import QuizList from "../components/QuizList";
import "../styles.css";

const classOptions = [
  { label: "Class 5", color: "#f59e42", icon: "fa-child", num: 5 },
  { label: "Class 6", color: "#fbbf24", icon: "fa-book-open", num: 6 },
  { label: "Class 7", color: "#34d399", icon: "fa-leaf", num: 7 },
  { label: "Class 8", color: "#38bdf8", icon: "fa-flask", num: 8 },
  { label: "Class 9", color: "#6366f1", icon: "fa-rocket", num: 9 },
  { label: "Class 10", color: "#9333ea", icon: "fa-graduation-cap", num: 10 },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative', minHeight: '80vh', paddingTop: '2.5rem' }}>
      {/* Animated floating quiz icon */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, transform: 'translate(-50%, -60%)', zIndex: 1,
        animation: 'floatQuizIcon 2.5s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '3.5rem', color: '#9333ea', filter: 'drop-shadow(0 2px 12px #9333ea44)' }}>
          <i className="fas fa-question-circle"></i>
        </span>
      </div>
      {/* Class selection cards removed as requested */}
      {/* Animated heading */}
      <h1 className="text-3xl mb-4" style={{
        fontWeight: 900,
        color: '#2563eb',
        letterSpacing: '0.04em',
        textAlign: 'center',
        marginBottom: '2.2rem',
        animation: 'homeTitlePop 1.1s cubic-bezier(0.4,0,0.2,1)',
      }}>
        Welcome to the Senzy Quiz
      </h1>
      {/* Animated button */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <Link
          to="/create"
          className="btn btn-blue"
          style={{
            background: 'linear-gradient(90deg, #2563eb 0%, #9333ea 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '0.7rem',
            padding: '0.8rem 2.5rem',
            fontWeight: 700,
            fontSize: '1.2rem',
            boxShadow: '0 2px 12px rgba(44,62,80,0.13)',
            cursor: 'pointer',
            letterSpacing: '0.01em',
            transition: 'transform 0.18s',
            animation: 'homeBtnBounce 1.2s 0.5s cubic-bezier(0.4,0,0.2,1) both',
            display: 'inline-block',
          }}
        >
          Create New Quiz
        </Link>
      </div>
      <QuizList />
      {/* Animations for Home page */}
      <style>{`
        @keyframes homeTitlePop {
          0% { opacity: 0; transform: scale(0.7) translateY(-30px); }
          70% { opacity: 1; transform: scale(1.08) translateY(5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes homeBtnBounce {
          0% { opacity: 0; transform: scale(0.7) translateY(30px); }
          60% { opacity: 1; transform: scale(1.08) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes floatQuizIcon {
          0% { transform: translate(-50%, -60%) scale(1); }
          50% { transform: translate(-50%, -80%) scale(1.08); }
          100% { transform: translate(-50%, -60%) scale(1); }
        }
        @keyframes homeClassPop {
          0% { opacity: 0; transform: scale(0.7) translateY(30px); }
          80% { opacity: 1; transform: scale(1.08) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes homeClassFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .home-class-card:hover, .home-class-card:focus {
          transform: scale(1.08) translateY(-6px) rotate(-2deg);
          box-shadow: 0 6px 24px #9333ea33;
          outline: none;
        }
      `}</style>
    </div>
  );
}
