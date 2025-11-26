import React, { useState } from "react";
import "./App.css";
import Categories from "./components/Categories";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";
import quizData from "./data/quizData.json";

function App() {
  const [step, setStep] = useState("category");
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const startQuiz = (category) => {
    const filtered = quizData.filter((q) => q.category === category);
    setSelectedQuestions(filtered);
    setStep("quiz");
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setStep("result");
  };

  const retry = () => {
    setStep("category");
    setScore(0);
  };

  return (
    <div className="App">
      {step === "category" && <Categories startQuiz={startQuiz} />}
      {step === "quiz" && (
        <QuizPage questions={selectedQuestions} finishQuiz={finishQuiz} />
      )}
      {step === "result" && (
        <Results score={score} total={selectedQuestions.length} retry={retry} />
      )}
    </div>
  );
}

export default App;
