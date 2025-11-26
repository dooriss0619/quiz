import React, { useState } from "react";

const QuizPage = ({ questions, finishQuiz }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const current = questions[index];
  const progress = ((index + 1) / questions.length) * 100;

  const handleAnswer = (i) => {
    setSelectedAnswer(i);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    let newScore = score;
    if (selectedAnswer === current.answer) {
      newScore = score + 1;
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelectedAnswer(null);
      setScore(newScore);
    } else {
      finishQuiz(newScore);
    }
  };

  return (
    <div className="quiz-page">
      {/* 진행도 바 */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="progress-dots">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`dot ${i <= index ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>

      {/* 레벨 정보 */}
      <div className="level-info">
        <div className="level-number">Level {index + 1}</div>
        <div className="level-category">{index < 2 ? "웹 개발의 뼈대 세우기" : index < 4 ? "웹 페이지에 생명 불어넣기" : "효율적인 개발과 사용자 경험 최적화"}</div>
      </div>

      {/* 질문 */}
      <div className="question-box">
        <h2 dangerouslySetInnerHTML={{ __html: current.question }}></h2>
      </div>

      {/* 선택지 */}
      <div className="options-container">
        {current.options.map((opt, i) => (
          <button
            key={i}
            className={`option-btn ${selectedAnswer === i ? "selected" : ""}`}
            onClick={() => handleAnswer(i)}
            aria-pressed={selectedAnswer === i}
          >
            <span className="option-text">{opt}</span>
            <span className="option-icon" aria-hidden="true"></span>
          </button>
        ))}
      </div>

      {/* 다음 문제 버튼 */}
      <button 
        className={`next-btn ${selectedAnswer === null ? "disabled" : ""}`}
        onClick={handleNext}
        disabled={selectedAnswer === null}
      >
        {index + 1 === questions.length ? "결과보기" : "다음문제"}
      </button>
    </div>
  );
};

export default QuizPage;