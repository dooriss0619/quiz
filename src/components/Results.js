import React from "react";

const Results = ({ score = 0, total = 0, retry }) => {
  // show raw numeric score (no zero-padding)

  return (
    <div className="results results-screen">
      <div className="results-inner">
        <img
          src="/images/3dicons-megaphone-dynamic-color.png"
          alt="megaphone"
          className="results-icon"
          aria-hidden="true"
        />

        <div className="results-sub">고생하셨습니다!</div>

        <h3 className="results-title">나의 웹 개발 점수는?</h3>

        <div className="results-score">
          <span className="score-number">{score}</span>
          <span className="score-unit">점</span>

          {/* background image placed behind the score */}
          <img
            src="/images/group-9.png"
            alt="background-icons-results"
            className="background-icons-results"
            aria-hidden="true"
          />
        </div>

        <div className="results-summary">총 {total}문제 중 <strong>{score}개 정답</strong></div>

        <div className="results-graph" aria-hidden="true">
          <img
            src="/images/group-6.png"
            alt="graph"
            className="results-graph-img"
          />
        </div>
      </div>

      <div className="results-footer">
        <button className="retry-btn" onClick={retry}>다시하기</button>
      </div>
    </div>
  );
};

export default Results;
