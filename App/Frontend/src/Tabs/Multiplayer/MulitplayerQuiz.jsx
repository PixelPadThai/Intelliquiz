import React, { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import io from 'socket.io-client';

 const socket = io("ws://localhost:5000");
function MultiplayerQuiz() {
  const [name, setName] = useState(null);
  const [room, setRoom] = useState(null);
  const [info, setInfo] = useState(false);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [answered, setAnswered] = useState(false);
 
  const [seconds, setSeconds] = useState(); // Set the initial duration in seconds
  const [scores, setScores] = useState([]);
  const [winner, setWinner] = useState();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);



const handleSubmit = (e) => {
  e.preventDefault();


  if (name && room) {
    setInfo(true);
  
  }
};
useEffect(() => {
  // Exit the effect when the timer reaches 0
  if (seconds === 0) return;

  // Create an interval to decrement the time every second
  const timerInterval = setInterval(() => {
    setSeconds(prevTime => prevTime - 1);
  }, 1000);

  // Clean up the interval when the component unmounts
  return () => {
    clearInterval(timerInterval);
  };
}, [seconds]); 
  useEffect(() => {
    if (name) {
      socket.emit('joinRoom', room, name);
    }
  }, [info]);


  useEffect(() => {
    socket.on('message', (message) => {
     
      toast(`${message} joined`,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });


    });
    return ()=>{
      socket.off('message')
    }
  }, []);


  

  useEffect(() => {
    socket.on('newQuestion', (data) => {
      setQuestion(data.question);
      setOptions(data.answers);
      setAnswered(false);
      setSeconds(data.timer)
      setSelectedAnswerIndex();
     

  
    });

    socket.on('answerResult', (data) => {
      if (data.isCorrect) {
        
        toast(`Correct! ${data.playerName} got it right.`, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      } 
      setScores(data.scores);

    });

    socket.on('gameOver', (data)=>{
      setWinner(data.winner);
    })

    return () => {
      socket.off('newQuestion');
      socket.off('answerResult');
      socket.off('gameOver');
    };
  }, []);

  const handleAnswer = (answerIndex) => {
    if (!answered) {
      setSelectedAnswerIndex(answerIndex);
      socket.emit('submitAnswer', room, answerIndex);
      setAnswered(true);
    }
  };

    if(winner){
      return (
        <h1 >winner is {winner}</h1>
      )
    }

  return (
    <div className="bg-black w-screen h-screen text-white flex justify-center items-center">
    {!info ? (
      <div className='flex flex-col gap-20 border-white w-1/2 h-2/3 mt-10 p-5 justify-center   '>
        <h1 className='text-5xl text-bold text-center -mt-11'> Multiplayer Battles 💡</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
   <input required placeholder='Enter your name' className='text-black p-2 rounded-lg' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
   <input required placeholder='Enter room no' className='text-black p-2 rounded-lg'  value={room} onChange={(e)=>setRoom(e.target.value)} />
   <button type='submit' className='border-white  p-2 bg-cyan-600 rounded-md w-4/5 m-auto gap-2 mt-14'>JOIN ROOM</button>
   </form>
   </div>
    ) : (
        <div className='w-1/2 h-2/3 border-2 border-white flex items-center flex-col gap-2'>
          <h1 className='text-5xl text-bold text-center'>QuizClash 💡</h1>
          <p className='text-center'>Room Id: {room}</p>
          <ToastContainer />
        
          {question ? (
            
            <div className='w-full h-full '>
            <p className='text-center'> Remaining Time: {seconds}</p> 
                 
              <div className='w-full text-cyan-200 mt-7 bg-'>
              <p className='text-black bg-white p-5 text-xl'>{question}</p>
              </div>
              <ul>
                {options.map((answer, index) => (
                  <li className='bg-white text-black rounded-md' key={index}>
                    <button className={`options ${selectedAnswerIndex === index ? 'selected' : ''} border-2 border-black w-full p-3 hover:bg-cyan-500  `} 
                    onClick={() => handleAnswer(index)} disabled={answered}>
                      {answer}
                    </button>
                  </li>
                ))}
              </ul>
              {scores.map((player, index) => (
          <p key={index}>{player.name}: {player.score}</p>
        ))}

             
            </div>
          ) : (
            <p>Loading question...</p>
          )}
        </div>
      )}
    </div>
    
  );
}

export default MultiplayerQuiz;


