import React, { useState } from "react";

const questions1 = [
    {
        question: "What is the primary function of an operating system?",
        answers: [
          { text: "To perform arithmetic calculations", correct: false },
          { text: "To manage hardware and software resources", correct: true },
          { text: "To edit images", correct: false },
          { text: " To design websites", correct: false },
        ],
    },
  {
    question: "Which of the following data structures follows the Last In, First Out (LIFO) principle?",
    answers: [
      { text: "Queue", correct: true },
      { text: "Array", correct: false },
      { text: "Stack", correct: false },
      { text: "Linked List", correct: false },
    ],
  },
  {
    question: "Which of these is a type of system call used for process control?",
    answers: [
      { text: "fork()", correct: true },
      { text: "malloc()", correct: false },
      { text: "printf()", correct: false },
      { text: "strcpy()", correct: false },
    ],
  },
  {
    question: "Which of the following is not a programming paradigm?",
    answers: [
      { text: "Object-Oriented", correct: false },
      { text: "Procedural", correct: false },
      { text: "Recursive", correct: true },
      { text: "Functional", correct: false },
    ],
  },
];



const questions2 = [
    {
        question: "What is the primary function of an operating system?",
        answers: [
          { text: "To perform arithmetic calculations", correct: false },
          { text: "To manage hardware and software resources", correct: true },
          { text: "To edit images", correct: false },
          { text: " To design websites", correct: false },
        ],
    },
  {
    question: "Which of the following data structures follows the Last In, First Out (LIFO) principle?",
    answers: [
      { text: "Queue", correct: true },
      { text: "Array", correct: false },
      { text: "Stack", correct: false },
      { text: "Linked List", correct: false },
    ],
  },
  {
    question: "Which of these is a type of system call used for process control?",
    answers: [
      { text: "fork()", correct: true },
      { text: "malloc()", correct: false },
      { text: "printf()", correct: false },
      { text: "strcpy()", correct: false },
    ],
  },
  {
    question: "Which of the following is not a programming paradigm?",
    answers: [
      { text: "Object-Oriented", correct: false },
      { text: "Procedural", correct: false },
      { text: "Recursive", correct: true },
      { text: "Functional", correct: false },
    ],
  },
];






const questions3 = [
    {
        question: "What is the primary function of an operating system?",
        answers: [
          { text: "To perform arithmetic calculations", correct: false },
          { text: "To manage hardware and software resources", correct: true },
          { text: "To edit images", correct: false },
          { text: " To design websites", correct: false },
        ],
    },
  {
    question: "Which of the following data structures follows the Last In, First Out (LIFO) principle?",
    answers: [
      { text: "Queue", correct: true },
      { text: "Array", correct: false },
      { text: "Stack", correct: false },
      { text: "Linked List", correct: false },
    ],
  },
  {
    question: "Which of these is a type of system call used for process control?",
    answers: [
      { text: "fork()", correct: true },
      { text: "malloc()", correct: false },
      { text: "printf()", correct: false },
      { text: "strcpy()", correct: false },
    ],
  },
  {
    question: "Which of the following is not a programming paradigm?",
    answers: [
      { text: "Object-Oriented", correct: false },
      { text: "Procedural", correct: false },
      { text: "Recursive", correct: true },
      { text: "Functional", correct: false },
    ],
  },
];


export default function Quiz(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions1[currentQuestionIndex];

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setSelectedAnswer(isCorrect ? "correct" : "incorrect");
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions1.length) {
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
    
      <div className="bg-white max-w-lg mx-auto rounded-lg shadow-lg p-8">
    

        {!showScore ? (
          <div className="mt-6">
            <h2 className="text-xl text-blue-800 decoration-auto">
              {currentQuestionIndex + 1}. {currentQuestion.question}
            </h2>

            <div className="my-4">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer.correct)}
                  className={`btn w-full bg-white text-gray-900 font-semibold py-2 px-4 my-2 border border-gray-700 rounded-lg hover:bg-gray-900 hover:text-white text-xl transition-colors ${
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
                className="bg-blue-900 text-white font-semibold py-2 px-6 mt-4 mx-auto rounded-lg hover:bg-blue-700 text-xl transition-colors"
              >
                Next
              </button>
            )}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl text-blue-800">
              You scored {score} out of {questions1.length}!
            </h2>
            <button
              onClick={resetQuiz}
              className="bg-blue-900 text-white font-semibold py-2 px-6 mt-4 mx-auto rounded-lg hover:bg-blue-700 transition-colors"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
  
  );
}
