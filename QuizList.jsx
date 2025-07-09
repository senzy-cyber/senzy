import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const snapshot = await getDocs(collection(db, "quizzes"));
      setQuizzes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetch();
  }, []);
  return (
    <div className="mt-4">
      {quizzes.map(q => (
        <div key={q.id} className="p-4 border rounded mb-2">
          <h2 className="font-bold">{q.title}</h2>
          <Link to={`/quiz/${q.id}`} className="text-blue-600">Take Quiz</Link>
        </div>
      ))}
    </div>
  );
}
    