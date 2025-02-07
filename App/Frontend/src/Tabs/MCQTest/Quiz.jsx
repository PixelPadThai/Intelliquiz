import React, { useState } from "react";
import CSfundamental_questions from '../../../../Backend/src/quizes/CSfundamental';
import { OAquiz } from "../../../../Backend/src/quizes/OAquiz";
import dsaQuiz from "../../../../Backend/src/quizes/DSAfundamentals";

export default function Quiz({ id }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Select the appropriate quiz based on `id`
  const selectedQuiz =
    id === 1 ? CSfundamental_questions : id === 2 ? dsaQuiz : OAquiz;

  const currentQuestion = selectedQuiz[currentQuestionIndex];

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setSelectedAnswer(isCorrect ? "correct" : "incorrect");
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
  };

  return (
    <div className="bg-custom-gray border font-raleway border-gray-400 w-full max-w-3xl mx-auto rounded-lg shadow-lg p-4 md:p-8 transition-all duration-300">
      {!showScore ? (
        <div className="mt-6">
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

          {selectedAnswer && (
            <button
              onClick={handleNextQuestion}
              className="bg-blue-900 text-white font-semibold py-2 px-6 md:py-3 md:px-8 mt-4 mx-auto rounded-lg transition-all duration-300 hover:bg-blue-700 text-base md:text-xl"
            >
              Next
            </button>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl text-blue-800">
            You scored {score} out of {selectedQuiz.length}!
          </h2>
          <button
            onClick={resetQuiz}
            className="bg-blue-900 text-white font-semibold py-2 px-6 md:py-3 md:px-8 mt-4 mx-auto rounded-lg transition-all duration-300 hover:bg-blue-700 text-base md:text-xl"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
