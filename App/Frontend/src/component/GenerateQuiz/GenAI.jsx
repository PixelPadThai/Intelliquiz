import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import SpinnerLoad from './SpinnerLoad';

const GenAI = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loader, setLoader] = useState(false);
    const [displayQuiz, setDisplayquiz] = useState(false);
    const [hide, setHidden] = useState("");

    async function generateAns() {
        setLoader(true);
        setAnswer("loading");

        const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB438NceYat0VDV1bOWFW_jWStArOQqUM8",
            method: "post",
            data: {
                contents: [
                    { parts: [{ text: `Generate a ten-question quiz in MCQ format about the following topic: ${question}. Ensure each question includes multiple choices and is related to the context and dont give answer at last` }] },
                ]
            }
        });

        setTimeout(() => {
            setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
            setLoader(false);
            setDisplayquiz(true);
            setHidden("hidden");
        }, 3000);
    }

    const downloadQuiz = () => {
        const element = document.createElement("a");
        const file = new Blob([answer], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "quiz.txt"; // You can use .docx for Word document
        document.body.appendChild(element); 
        element.click();
        document.body.removeChild(element); 
    };

    return (
        <>
            <div className='min-w-full bg-black h-full'>
                {loader ? (
                    <div>
                        <SpinnerLoad />
                    </div>
                ) : (
                    <div className={`w-full bg-black h-screen flex flex-col items-center gap-8 ${hide}`}>
                        <h1 className='text-white tracking-wider text-5xl font-sans font-bold mt-56'>PASTE YOUR PARAGRAPH</h1>
                        <textarea
                            className='w-4/5 bg-transparent p-6 border-2 border-white text-white'
                            value={question}
                            onChange={(e) => { setQuestion(e.target.value) }}
                            cols="30"
                            rows="10"
                        ></textarea>
                        <button
                            className='rounded-md w-1/3 my-0 mx-auto p-4 bg-blue-700 text-white'
                            onClick={generateAns}
                        >
                            Generate Quiz
                        </button>
                    </div>
                )}

                <div className=' w-full md:min-w-full flex items-center justify-center'>
                    {displayQuiz && (
                        <div className='max-w-fit flex flex-col justify-center  py-52 ml-10'>
                            <pre className='rounded-lg   text-lg text-lime-400'>{answer}</pre>
                            <button
                                className='mt-4 w-1/2 px-4 py-2 m-auto bg-green-600 text-white rounded-md'
                                onClick={downloadQuiz}
                            >
                                Download Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default GenAI;



// import React from 'react'
// import axios from 'axios'
// import { useState,useEffect } from 'react'
// import SpinnerLoad from './SpinnerLoad'

// const GenAI = () => {
//     const [question, setQuestion] = useState("")

//     const[answer,setAnswer]=useState("");

//     const[loader,setLoader]=useState(false);
//     // const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

//     const[displayQuiz,setDisplayquiz]=useState(false);

//     const[hide,setHidden]=useState("");
   


   
   
//   async function generateAns(){
//     // console.log("Loading")
//     setLoader(true);
//     setAnswer("loading");
//     // previous - AIzaSyDzDsA_rg1EzgFasXjH7kudY7g9ti9mEIo
//     // new - AIzaSyB438NceYat0VDV1bOWFW_jWStArOQqUM8
//     // <SpinnerLoad/>  
//       const response= await axios({
          
//         url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB438NceYat0VDV1bOWFW_jWStArOQqUM8",
//         method:"post",
//         data:{
//           contents:[
//             {parts:[{text:`Generate a ten-question quiz in MCQ format about the following topic: ${question}. Ensure each question includes multiple choices and is related to the context and dont give answer at last`}]},
//           ]
//         }
//       })
//       // function ToggleQuiz(){
//       setTimeout(()=>{
//         setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text'])
//         setLoader(false)
//         setDisplayquiz(true);
//         setHidden("hidden")
//       },3000)

      
//     // }
     
//     }
  
//     return (
//       <>


//       <div className='min-w-full bg-black h-full '>
//       {/* { <div  className='w-full bg-black h-full flex flex-col  items-center  gap-8 '>
//         <h1 className='text-white tracking-wider  text-5xl font-sans font-bold mt-56'>PASTE YOUR PARAGRAPH</h1>
//         <textarea className=' w-4/5 bg-transparent p-6 border-2 border-white  text-white'  value={question} onChange={(e)=>{setQuestion(e.target.value)}} cols="30" rows="10" ></textarea>
//         <button className='rounded-md w-1/3  my-0 mx-auto  p-4 bg-blue-700 text-white' onClick={generateAns}>Generate Quiz</button>
        
//         <pre className='rounded-lg text-lg text-lime-400 my-10'>{answer}</pre>
//       </div>} */}

      
//       {loader? <div> <SpinnerLoad/></div> : <div className={`w-full bg-black h-screen flex flex-col  items-center gap-8 ${hide}`}>
//         <h1 className='text-white tracking-wider  text-5xl font-sans font-bold mt-56'>PASTE YOUR PARAGRAPH</h1>
//         <textarea className=' w-4/5 bg-transparent p-6 border-2 border-white  text-white'  value={question} onChange={(e)=>{setQuestion(e.target.value)}} cols="30" rows="10" ></textarea>
//         <button className='rounded-md w-1/3  my-0 mx-auto  p-4 bg-blue-700 text-white' onClick={generateAns}>Generate Quiz</button>
        
        
//       </div>}

//          <div className=''>


//         { displayQuiz &&  <pre className='max-w-fit  rounded-lg text-lg text-lime-400 py-52 ml-80 '>{answer}</pre>}
//         </div>
//       </div>
//       </>)
// }

// export default GenAI



// import React, { useState } from 'react';
// import axios from 'axios';
// import SpinnerLoad from './SpinnerLoad';

// const GenAI = () => {
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [loader, setLoader] = useState(false);
    
//     // Access environment variable using import.meta.env
//     const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
//     console.log(apiKey)

//     async function generateAns() {
//         setLoader(true);
//         setAnswer("loading");

//         try {
//             const response = await axios({
//                 url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
//                 method: "post",
//                 data: {
//                     contents: [
//                         { parts: [{ text: `Generate a ten-question quiz in MCQ format about the following topic: ${question}. Ensure each question includes multiple choices and is related to the context.` }] }
//                     ]
//                 }
//             });
//             setAnswer(response.data.candidates[0].content.parts[0].text);
//         } catch (error) {
//             setAnswer("Error generating quiz");
//         } finally {
//             setLoader(false);
//         }
//     }

//     return (
//         <>
//             {loader ? (
//                 <SpinnerLoad />
//             ) : (
//                 <div className='w-full bg-black h-full flex flex-col items-center gap-8'>
//                     <h1 className='text-white tracking-wider text-5xl font-sans font-bold mt-56'>
//                         PASTE YOUR PARAGRAPH
//                     </h1>
//                     <textarea
//                         className='w-4/5 bg-transparent p-6 border-2 border-white text-white'
//                         value={question}
//                         onChange={(e) => setQuestion(e.target.value)}
//                         cols='30'
//                         rows='10'
//                     ></textarea>
//                     <button
//                         className='rounded-md w-1/3 my-0 mx-auto p-4 bg-blue-700 text-white'
//                         onClick={generateAns}
//                     >
//                         Generate Quiz
//                     </button>
//                     <pre className='rounded-lg text-lg text-lime-400 my-10'>{answer}</pre>
//                 </div>
//             )}
//         </>
//     );
// };

// export default GenAI;

