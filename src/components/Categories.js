import React from "react";

const Categories = ({ startQuiz }) => {
  return (
    <div className="container categories-container">
      <div className="greeting">환영합니다!</div>

      <div className="subtitle">
        <div className="subtitle-line">웹 개발 마스터 챌린지:</div>
        <div className="subtitle-line highlight">기초부터 심화까지 정복하기!</div>
      </div>

      <div className="icon-wrapper">
        {/* Use the provided image in public/images */}
        <img src="../images/3dicons-computer-dynamic-color.png" alt="computer" className="computer-img" />
        <img src="../images/Group 8.png" alt="background-icons" className="background-icons"/>
      </div>

      <button className="start-btn" onClick={() => startQuiz("시작하기")}>시작하기</button>
    </div>
  );
};

export default Categories;
