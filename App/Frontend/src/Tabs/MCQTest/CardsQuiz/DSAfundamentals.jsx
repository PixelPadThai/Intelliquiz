import React from 'react'
import Quiz from '../Quiz';
import { useState } from 'react';

const DSAfundamentals = () => {

  const [hide, setHide] = useState(true);

  const[quiz,setQuiz]=useState([]);

  const[id,setId]=useState(0);
  




  function TriggerQuiz(){
       setHide(false);

       }
  



  return (
    <>
    
    <div className="bg-black w-screen h-screen flex justify-center">

    { hide ?
      <div className="text-white border-2 border-white w-2/3 h-1/2 mt-56 fixed flex justify-center ">
        <div className="flex flex-col items-center w-full ">
          <h1 className="w-full text-6xl font-bold text-center">Choose Difficulty</h1>
          <div className="flex flex-col items-center w-full gap-5 mt-10">
            <button onClick={()=>{TriggerQuiz(); setId(1)}}   className="w-10/12 bg-green-400 py-4 text-3xl hover:bg-green-300 ">Easy</button>
            <button onClick={()=>{TriggerQuiz(); setId(2)}} className="w-10/12 bg-yellow-500 py-4 text-3xl hover:bg-yellow-400">Medium</button>
            <button onClick={()=>{TriggerQuiz(); setId(3)}} className="w-10/12 bg-red-600 py-4 text-3xl hover:bg-red-500"> Hard</button>
          </div>
        </div>
      </div>:<div className="mt-40 flex flex-col gap-10">
            
          <h1 className="w-full text-6xl font-bold text-center text-white">Quiz on DSA Fundamentals </h1>

          <Quiz/>
             

         
      </div>}
     </div>
      
    
  </>
  )
}


export default DSAfundamentals