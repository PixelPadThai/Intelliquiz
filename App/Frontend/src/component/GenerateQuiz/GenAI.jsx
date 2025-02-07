import React, { useState } from 'react';
import axios from 'axios';
import SpinnerLoad from './SpinnerLoad';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const GenAI = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loader, setLoader] = useState(false);
  const [displayQuiz, setDisplayQuiz] = useState(false);
  const [hide, setHidden] = useState("");

  async function generateAns() {
    setLoader(true);
    setAnswer("loading");

    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      method: "post",
      data: {
        contents: [
          {
            parts: [{
              text: `Generate a ten-question quiz in MCQ format about the following topic: ${question}. Ensure each question includes multiple choices and is related to the context and dont give answer at last`
            }]
          },
        ]
      }
    });

    // Simulate delay for modern feel and UX
    setTimeout(() => {
      setAnswer(response.data.candidates[0].content.parts[0].text);
      setLoader(false);
      setDisplayQuiz(true);
      setHidden("hidden");
    }, 3000);
  }

  const downloadQuiz = () => {
    const element = document.createElement("a");
    const file = new Blob([answer], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "quiz.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {loader ? (
        <div className="flex items-center justify-center h-screen">
          <SpinnerLoad />
        </div>
      ) : (
        // Input form: hidden when quiz is generated
        <div className={`flex flex-col items-center justify-center p-4 md:p-8 ${hide} ${displayQuiz ? 'hidden' : 'flex'} h-screen`}>
          <h1 className="text-white tracking-wider text-3xl md:text-5xl font-sans font-bold mb-8">
            Paste Your Paragraph
          </h1>
          <textarea
            className="w-full max-w-2xl bg-transparent p-4 md:p-6 border-2 border-gray-300 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            cols="30"
            rows="8"
            placeholder="Enter your content here..."
          ></textarea>
          <button
            className="rounded-md w-full max-w-xs mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold"
            onClick={generateAns}
          >
            Generate Quiz
          </button>
        </div>
      )}

      {displayQuiz && (
        <div className="flex flex-col items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-3xl bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-6 my-8">
            <pre className="whitespace-pre-wrap break-words text-lg text-lime-400">
              {answer}
            </pre>
          </div>
          <button
            className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors text-white rounded-md font-semibold"
            onClick={downloadQuiz}
          >
            Download Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default GenAI;


