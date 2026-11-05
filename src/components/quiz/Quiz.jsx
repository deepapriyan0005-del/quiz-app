import React, { useState } from "react";
import "./Quiz.css";
import questions from "../../data/question";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  console.log("Commit check");
  console.log("!!!!!!!!!!! check");
  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="result">
          <h2>Quiz Completed 🎉</h2>
          <h3>
            Score: {score} / {questions.length}
          </h3>

          <button onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <h2>
            Question {currentQuestion + 1}/{questions.length}
          </h2>

          <h3>
            {questions[currentQuestion].question}
          </h3>

          <div className="options">
            {questions[currentQuestion].options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;