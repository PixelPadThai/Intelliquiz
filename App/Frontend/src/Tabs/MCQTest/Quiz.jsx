
import React, { useState, useEffect } from "react";
import CSfundamental_questions from '../../../../Backend/quizes/CSfundamental';
import { OAquiz } from "../../../../Backend/quizes/OAquiz";
import dsaQuiz from "../../../../Backend/quizes/DSAfundamentals";

export default function Quiz({ id }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);

  // Select the appropriate quiz based on `id`
  const selectedQuiz =
    id === 1 ? CSfundamental_questions : id === 2 ? dsaQuiz : OAquiz;

  const currentQuestion = selectedQuiz[currentQuestionIndex];

  // Calculate progress bar width and dynamic color (green to red)
  const progressWidth = (timeLeft / 15) * 100;
  const progressColor = `rgb(${Math.floor(255 * (1 - timeLeft / 15))}, ${Math.floor(255 * (timeLeft / 15))}, 0)`;

  // Timer effect for each question. If no answer is selected, countdown runs.
  useEffect(() => {
    setTimeLeft(9); // Reset timer for new question

    // Only run timer if no answer is selected
    if (selectedAnswer !== null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, selectedAnswer]);

  const handleAnswerClick = (isCorrect) => {
    // Update score if answer is correct
    if (isCorrect) setScore(score + 1);
    setSelectedAnswer(isCorrect ? "correct" : "incorrect");

    // Auto advance after a brief delay so user sees the answer feedback
    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < selectedQuiz.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setTimeLeft(15);
  };

  return (
    <div className="bg-custom-gray border font-raleway border-gray-400 w-full max-w-3xl mx-auto rounded-lg shadow-lg p-4 md:p-8 transition-all duration-300">
      {!showScore ? (
        <div className="mt-6">
          {/* Timer and progress bar */}
          <div className="mb-4">
            <div className="text-gray-300 text-sm mb-1">Time left: {timeLeft}s</div>
            <div className="w-full bg-gray-300 h-1 rounded">
              <div
                style={{
                  width: `${progressWidth}%`,
                  backgroundColor: progressColor,
                  height: "100%",
                  transition: "width 1s linear, background-color 1s linear",
                }}
                className="rounded"
              ></div>
            </div>
          </div>

          <h2 className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </h2>

          <div className="my-4">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer.correct)}
                className={`w-full bg-white text-gray-900 font-semibold py-2 px-4 md:py-3 md:px-6 my-2 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-400 hover:text-white text-base md:text-xl ${
                  selectedAnswer &&
                  (answer.correct ? "bg-green-300" : "bg-red-300")
                }`}
                disabled={selectedAnswer !== null} // Disable buttons after selection
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl text-cyan-200">
            You scored {score} out of {selectedQuiz.length}!
          </h2>
          <button
            onClick={resetQuiz}
            className="bg-cyan-500 text-white font-semibold py-2 px-6 md:py-3 md:px-8 mt-4 mx-auto rounded-lg transition-all duration-300 hover:bg-blue-700 text-base md:text-xl"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
