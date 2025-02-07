import React from 'react'
import Quiz from '../Quiz';

function Difficulty() {

  // function TriggerQuiz1(){
  //   return(
        
  //   )
  // }

  return (
    <div className="text-white border bg-custom-gray border-gray-500 mt-56 w-2/3 rounded-lg px-28 p-20  fixed flex justify-center ">
         
    <div className="flex flex-col items-center w-full ">
            <h1 className="w-full text-6xl font-bold text-center">Choose Difficulty</h1>
            <div className="flex flex-col items-center w-full gap-5 mt-10">
              <button onClick={()=>{TriggerQuiz(); setId(1)}}  className="font-raleway rounded-md w-10/12 bg-green-400 py-4 text-3xl hover:bg-green-300 ">Easy</button>
              <button onClick={()=>{TriggerQuiz(); setId(2)}} className="font-raleway rounded-md w-10/12 bg-yellow-500 py-4 text-3xl hover:bg-yellow-400">Medium</button>
              <button onClick={()=>{TriggerQuiz(); setId(3)}} className="font-raleway rounded-md w-10/12 bg-red-600 py-4 text-3xl hover:bg-red-500"> Hard</button>
            </div>
          </div>
    </div>
  )
}

export default Difficulty