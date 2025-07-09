import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";

export default function QuizForm() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", ""], answerIndex: 0 }
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", ""], answerIndex: 0 }]);
  };

  const updateQuestion = (i, field, value) => {
    const q = [...questions];
    q[i][field] = value;
    setQuestions(q);
  };

  const updateOption = (qi, oi, value) => {
    const q = [...questions];
    q[qi].options[oi] = value;
    setQuestions(q);
  };

  const saveQuiz = async () => {
    const data = { title, questions };
    await addDoc(collection(db, "quizzes"), data);
    alert("Quiz saved!");
    setTitle("");
    setQuestions([{ question: "", options: ["", ""], answerIndex: 0 }]);
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)}
             placeholder="Quiz Title" className="input" />
      {questions.map((q, i) => (
        <div key={i} className="mb-4 border p-2">
          <input value={q.question} onChange={e => updateQuestion(i, "question", e.target.value)}
                 placeholder={`Question #${i+1}`} className="input mb-2" />
          {q.options.map((opt, oi) => (
            <div key={oi}>
              <input value={opt} onChange={e => updateOption(i, oi, e.target.value)}
                     placeholder={`Option ${oi+1}`} className="input mb-1" />
            </div>
          ))}
          <select value={q.answerIndex} onChange={e => updateQuestion(i, "answerIndex", +e.target.value)} className="input">
            {q.options.map((_, oi) => <option key={oi} value={oi}>Correct: Option {oi+1}</option>)}
          </select>
        </div>
      ))}
      <button onClick={addQuestion} className="btn btn-gray">Add Question</button>
      <button onClick={saveQuiz} className="btn btn-blue ml-2">Save Quiz</button>
    </div>
  );
}
