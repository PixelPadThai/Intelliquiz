import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Quiz from "../Quiz";
import Difficulty from "../Difficulty/Difficulty";

const CSfundamentals = () => {
  const [hide, setHide] = useState(true);

  const [quiz, setQuiz] = useState([]);

  const [id, setId] = useState(0);

  function TriggerQuiz() {
    setHide(false);
  }

  return (
    <>
      <div className="bg-black w-screen h-screen flex justify-center">
        {hide ? (
          <div className="text-white border bg-custom-gray border-gray-500 mt-56 w-2/3 rounded-lg px-28 p-20  fixed flex justify-center ">
            <div className="flex flex-col items-center w-full ">
              <h1 className="w-full text-6xl font-semibold text-center">
                Rules and Regulations
              </h1>
              <div className="flex flex-col items-center w-full gap-5 mt-10">
                <ul className="list-disc list-inside mr-20">
                  <li className="mb-2">
                    The quiz consists of multiple-choice questions (MCQs)
                  </li>
                  <li className="mb-2">
                    Users cannot pause or restart a quiz session once it has
                    begun
                  </li>
                  <li className="mb-2">
                    Final score will be declared after the end of quiz
                  </li>
                </ul>
                <button
                  onClick={() => {
                    TriggerQuiz();
                    setId(1);
                  }}
                  className="font-raleway rounded-md w-10/12 bg-green-400 py-4 text-3xl hover:bg-green-300 "
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-40 flex flex-col gap-10">
            <h1 className="w-full text-6xl font-bold text-center text-white">
              Quiz on CS Fundamentals{" "}
            </h1>

            <Quiz id={id} quiz="CS" />
          </div>
        )}
      </div>
    </>
  );
};

export default CSfundamentals;
