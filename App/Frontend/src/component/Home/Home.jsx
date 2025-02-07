// import React from 'react';
// import AIimage from '../../assets/AI-Image.png';
// import Block from '../Block/Block';
// // ../Card/MagicCardDemo
// import MagicCardDemo from '../Card/Card';
// import Footer from '../Footer/Footer';
// import Intelli_Img from '../../assets/Intelli_Img1.jpg'
// import QuizIcon from '../../assets/QuizIcon2.png'
// import ExamPng from '../../assets/exams.png'
// import SelfLearning from '../../assets/Self_Learning.png'
// import EmpAssessment from '../../assets/EMP_ASSESSMENT.png'
// import { useNavigate } from 'react-router-dom';
// import { useEffect, useRef } from 'react';
// import brainImage from '../../assets/brain.png';
// import MultiplayerIcon from '../../assets/multiplayer.png';

// const Home = () => {

//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate('/main');
//   };
//   const featuresRef = useRef(null);
//   const listRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-slide-in-left');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (featuresRef.current) {
//       observer.observe(featuresRef.current);
//     }
    
    

//     return () => {
//       if (featuresRef.current) {
//         observer.unobserve(featuresRef.current);
//       }
//     };

//   }, []);
//   useEffect(() => {
//     if (listRef.current) {
//       const listItems = listRef.current.querySelectorAll('li');
//       listItems.forEach((item, index) => {
//         const letters = item.textContent.split('');
//         item.innerHTML = letters.map((letter, i) => `<span style="display: inline-block; animation: letter-pull-up 0.3s ease-out forwards; animation-delay: ${i * 0.02}s;">${letter}</span>`).join('');
//       });
//     }
//   }, []);
//   return (

//     <>
//     <div className='bg-black w-full scroll-smooth min-h-screen flex flex-col items-center justify-center'>
//       <div className='w-full min-h-screen scroll-smooth bg-black flex flex-col md:flex-row text-white '>
//         <div className='w-full mt-12 md:mt-24 flex flex-col-reverse md:flex-row justify-between  px-4 md:px-0'>
//           <div className=' p-4 md:ml-32 md:w-1/2 flex flex-col items-center gap-2'>
//             <h2 className=' text-3xl md:text-8xl font-bold   text-blue-300 mt-10 md:mt-40 animate-fade-move'>
//               AI Driven Quiz
//             </h2>
//             <p className='mt-5  md:text-xl font-raleway animate-fade-in '>
//             Elevate your learning with AI-driven quizzes and multiplayer online modes, designed to make studying smarter and more engaging for students
//             </p>
            
//             <div className=' flex justify-center md:justify-start mt-28 mr-14'>
//               <button onClick={handleClick}  className='bg-blue-700 font-semibold p-4 px-8 md:px-16 rounded-md shadow-xl shadow-transparent'>
//                 Get Started
//               </button>
//             </div>
//           </div>
//           <div className='flex justify-center md:justify-end md:w-1/2'>
//             <img className='h-fit w-10/12 mr-10 mt-20  drop-shadow-[0_10px_15px_rgba(135,206,235,0.7)] animate-move-up-down' src={AIimage} alt='AI-Image' />
//           </div>
         
//         </div>
//       </div>

//       {/* --------- NEW SECTION --------------- */}

//       <hr  className='w-full mt-56 border-gray-600 '/>
//       <div className='bg-black w-full min-h-screen  '>


//        <div >
//         <p ref={featuresRef} className='text-white text-7xl ml-16 p-4 font-bold '>Features</p>
//       </div>
//       {/* <hr  className='border-white w-full'/> */}
       
//         <div className='w-full min-h-full  py-24  flex flex-col gap-1 md:flex-row justify-evenly items-center '> 
//           <img className='w-1/4 h-1/4 drop-shadow-[0_5px_5px_rgba(255,105,180,0.5)] animate-fade-in' src={brainImage} alt="" />
//           <div className='flex flex-col gap-10'>
//              <h3 className='text-white font-normal  text-4xl animate-fade-move md:text-center font-raleway  -mt-6'>PARAGAPH BASED AI QUIZ GENERATION</h3>
//              <ul ref={listRef} className='text-white flex flex-col gap-4 p-12 bg-neutral-900 dark:bg-neutral-900  border-spacing-1 rounded-lg border border-gray-600 py-16  animate-border-beam' >
//                <li className='text-white text-xl font-light text-center animate-letter-pull-up font-raleway '>AI-Powered Quiz Generation  Convert any paragraph into a quiz instantly.</li>
//                <li className='text-white text-xl font-light text-center animate-letter-pull-up font-raleway  '>Multi-Language Support: Generate quizzes in multiple languages</li>
//                <li className='text-white text-xl font-light text-center animate-letter-pull-up font-raleway '>Turn any text, from academic notes to articles, into an interactive learning session.</li>
//                {/* <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> */}
//              </ul>
//           </div>
//         </div>
//         <hr  className=' border-gray-600 w-full'/>
        
//         <div className='w-full min-h-full  py-24  flex flex-col gap-1 md:flex-row justify-evenly items-center '> 
        
//         <div className='flex flex-col gap-10'>
//              <h3 className='text-white  text-4xl animate-fade-move md:text-center  font-raleway -mt-6'>MULTIPLAYER QUIZ MODE</h3>
//              <ul ref={listRef} className='text-white flex flex-col gap-4 p-12 bg-neutral-900 font-raleway font-light dark:bg-neutral-900 border-spacing-1 rounded-lg border  border-gray-600 py-16' >
//                <li className='text-white text-xl text-center animate-letter-pull-up '>Compete in real-time quiz sessions</li>
//                <li className='text-white text-xl text-center animate-letter-pull-up  '>Multiple participants per session for collaborative competition</li>
//                <li className='text-white text-xl text-center animate-letter-pull-up '>Randomized questions to keep each session unique.</li>
//                {/* <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> */}
//              </ul>
//           </div>
//           <img className='w-1/4 h-1/4 drop-shadow-[0_5px_5px_rgba(255,255,255,0.5)] animate-fade-in filter invert ' src={MultiplayerIcon} alt="" />
          
//         </div>
//         <hr  className=' border-gray-600 w-full'/>
//         <div className='w-full min-h-full  py-24  flex flex-col gap-1 md:flex-row justify-evenly items-center '> 
//           <img className='w-1/4 h-1/4 drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)] animate-fade-in' src={QuizIcon} alt="" />
//           <div className='flex flex-col gap-10'>
//              <h3 className='text-white  text-4xl animate-fade-move md:text-center  font-raleway -mt-6'>Prepare for Campus Placement</h3>
//              <ul ref={listRef} className=' text-white flex flex-col gap-4 p-12 bg-neutral-900 font-raleway font-light dark:bg-neutral-900 border-spacing-1 rounded-lg border  border-gray-600 py-16' >
//                <li className='text-white text-xl text-center animate-letter-pull-up '>Simulate real exam conditions for effective practice</li>

//                <li className='text-white text-xl text-center animate-letter-pull-up  '>Quizes on CS Fundamentals </li>
//                <li className='text-white text-xl text-center animate-letter-pull-up '>Test your knowledge with our most asked questions.</li>
//                {/* <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> */}
//              </ul>
//           </div>
//         </div>

        
//       </div>
//       <hr  className='  border-gray-600 w-full'/>


//       {/* --------- NEW SECTION --------------- */}

//         {/* <div className='border-2 border-x-pink-200 mt-14'>
//         <p className='text-white text-7xl  mt-11 font-bold mr-40'>Features</p>
//         </div> */}
      
        

//       <div className='bg-black w-full min-h-screen pb-32'>
//         <div className='w-full h-full mt-20 '>
//           <p className='text-7xl text-white ml-8 text-center'>MADE FOR WHOM ?</p>
//           {/* <p className='text-center text-white'>AND WHAT PROBLEM IT WILL SOLVE</p> */}
//           <div className='flex gap-2 mt-10  w-full h-2/3 '>
//             <div className='flex-1 rounded-lg border  border-gray-600'>
//               {/* <h3 className='text-white text-center  font-semibold text-2xl'>EDUCATION</h3> */}
//               <img className='w-1/2 m-auto mt-6 drop-shadow-[0_5px_10px_rgba(255,255,255,0.7)] animate-fade-in' src={ExamPng} alt="" />
//               <p className='text-white text-3xl font-bold mt-3 text-center shadow-md animate-fade-in '>EDUCATION</p>
//               <div className='w-5/6 mt-4  h-1/3 border  border-gray-600 m-auto'>
//               <p className='text-white text-lg font-light text-center m-auto mt-2 p-3 animate-letter-pull-up '>
//               IntelliQuiz automates quiz creation for teachers, students, 
//               and EdTech platforms, saving time, enhancing engagement, and ensuring personalized assessments for education, competitive exams,
//               and adaptive learning.
//                 </p>
//               </div>
//             </div>
//             <div className='flex-1 rounded-lg border  border-gray-600'>
//               {/* <h3 className='text-white text-center  font-semibold text-2xl'>EDUCATION</h3> */}
//               <img className='w-4/6 h-60 m-auto mt-6 drop-shadow-[0_5px_10px_rgba(255,255,255,0.7)] animate-fade-in' src={EmpAssessment} alt="" />
//               <p className='text-white  text-3xl font-bold mt-4 text-center shadow-md animate-fade-in  '>CORPORATE TRAINING</p>
//               <div className='w-5/6 mt-5  h-1/3 border  border-gray-600 m-auto'>
//               <p className='text-white text-lg text-center font-light m-auto mt-2 p-3 animate-letter-pull-up'>
//                 IntelliQuiz automates quiz creation for corporate training, saving time, 
//                 enhancing engagement, and ensuring effective employee assessments.
//                 </p>
//               </div>
//             </div>
//             <div className='flex-1 rounded-lg border  border-gray-600'>
//               {/* <h3 className='text-white text-center  font-semibold text-2xl'>EDUCATION</h3> */}
//               <img className='w-5/6 h-1/2 m-auto mt-3 drop-shadow-[0_5px_10px_rgba(255,255,255,0.7)] animate-fade-in' src={SelfLearning} alt="" />
//               <p className='text-white text-3xl font-bold mt-3 text-center shadow-md animate-fade-in '>SELF-LEARNING</p>
//               <div className='w-5/6 mt-4  h-1/3 border-2  border-gray-600 m-auto'>
//                 <p className='text-white text-lg text-center font-light m-auto mt-2 p-3 animate-letter-pull-up '>
//                 IntelliQuiz simplifies learning by generating quizzes from textbooks or content, helping users test knowledge, retain information, and master 
//                 topics effectively through active recall.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr  className=' border-gray-600 w-full'/>
//       <div className='bg-black w-full max-h-screen '>

//         <div className='mt-10'>
//           <p className='text-7xl text-white text-center ml-8 '>About us</p>

//           <p className='text-white text-xl p-14 mt-8'>IntelliQuiz turns any content into interactive quizzes, helping educators, students, and self-learners learn effectively. With features like multiplayer mode for collaborative learning and specialized
//              preparation for campus placements, we aim to make learning engaging, accessible, and efficient for everyone.</p>


          
          
//         </div>
            
//       </div>
//       </div>
//       <Footer></Footer>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import AIimage from '../../assets/AI-Image.png';
import brainImage from '../../assets/brain.png';
import MultiplayerIcon from '../../assets/multiplayer.png';
import QuizIcon from '../../assets/QuizIcon2.png';
import ExamPng from '../../assets/exams.png';
import SelfLearning from '../../assets/Self_Learning.png';
import EmpAssessment from '../../assets/EMP_ASSESSMENT.png';

// Unused imports (Block, MagicCardDemo, Intelli_Img) can be removed if not needed
import Footer from '../Footer/Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  };

  const featuresRef = useRef(null);

  // Intersection observer for animating the "Features" title
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-left');
        }
      },
      { threshold: 0.1 }
    );
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }
    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  // Animate each letter in list items
  useEffect(() => {
    const listItems = document.querySelectorAll('.letter-animate li');
    listItems.forEach((item) => {
      const letters = item.textContent.split('');
      item.innerHTML = letters
        .map(
          (letter, i) =>
            `<span style="display: inline-block; animation: letter-pull-up 0.3s ease-out forwards; animation-delay: ${i *
              0.02}s;">${letter}</span>`
        )
        .join('');
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-black w-full scroll-smooth min-h-screen flex flex-col items-center justify-center">
        <div className="w-full min-h-screen bg-black flex flex-col md:flex-row text-white">
          <div className="w-full mt-12 md:mt-24 flex flex-col-reverse md:flex-row justify-between px-4 md:px-8">
            <div className="p-4 md:ml-32 md:w-1/2 flex flex-col items-center md:items-start gap-2">
              <h2 className="text-2xl md:text-6xl lg:text-8xl font-bold text-blue-300 mt-10 md:mt-40 animate-fade-move">
                AI Driven Quiz
              </h2>
              <p className="mt-5 text-base md:text-xl font-raleway animate-fade-in text-center md:text-left">
                Elevate your learning with AI-driven quizzes and multiplayer online modes, designed to make studying smarter and more engaging for students.
              </p>
              <div className="flex justify-center md:justify-start mt-8 md:mt-28 mr-0 md:mr-14">
                <button
                  onClick={handleClick}
                  className="bg-blue-700 font-semibold p-3 px-6 md:p-4 md:px-8 rounded-md shadow-lg transition-transform transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end md:w-1/2">
              <img
                className="w-full max-w-screen-md  mt-10 md:mt-20  drop-shadow-[0_10px_15px_rgba(135,206,235,0.7)] animate-move-up-down"
                src={AIimage}
                alt="AI-Image"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <hr className="w-full mt-16 md:mt-56 border-gray-600" />
        <div className="bg-black w-full">
          <div>
            <p ref={featuresRef} className="text-white text-4xl md:text-7xl ml-4 md:ml-16 p-4 font-bold">
              Features
            </p>
          </div>

          {/* Feature 1 */}
          <div className="w-full py-16 flex flex-col gap-8 md:flex-row justify-evenly items-center">
            <img
              className="w-full max-w-xs drop-shadow-[0_5px_5px_rgba(255,105,180,0.5)] animate-fade-in"
              src={brainImage}
              alt="AI Brain"
            />
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-2xl md:text-4xl animate-fade-move text-center md:text-left font-raleway">
                PARAGRAPH BASED AI QUIZ GENERATION
              </h3>
              <ul className="letter-animate text-white flex flex-col gap-4 p-6 md:p-12 bg-neutral-900 rounded-lg border border-gray-600 py-8 animate-border-beam">
                <li className="text-white text-base md:text-xl font-light text-center animate-letter-pull-up font-raleway">
                  AI-Powered Quiz Generation – Convert any paragraph into a quiz instantly.
                </li>
                <li className="text-white text-base md:text-xl font-light text-center animate-letter-pull-up font-raleway">
                  Multi-Language Support: Generate quizzes in multiple languages.
                </li>
                <li className="text-white text-base md:text-xl font-light text-center animate-letter-pull-up font-raleway">
                  Turn any text, from academic notes to articles, into an interactive learning session.
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-600 w-full" />

          {/* Feature 2 */}
          <div className="w-full py-16 flex flex-col gap-8 md:flex-row justify-evenly items-center">
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-2xl md:text-4xl animate-fade-move text-center md:text-left font-raleway">
                MULTIPLAYER QUIZ MODE
              </h3>
              <ul className="letter-animate text-white flex flex-col gap-4 p-6 md:p-12 bg-neutral-900 font-raleway font-light rounded-lg border border-gray-600 py-8">
                <li className="text-white text-base md:text-xl text-center animate-letter-pull-up">
                  Compete in real-time quiz sessions.
                </li>
                <li className="text-white text-base md:text-xl text-center animate-letter-pull-up">
                  Multiple participants per session for collaborative competition.
                </li>
                <li className="text-white text-base md:text-xl text-center animate-letter-pull-up">
                  Randomized questions to keep each session unique.
                </li>
              </ul>
            </div>
            <img
              className="w-full max-w-xs drop-shadow-[0_5px_5px_rgba(255,255,255,0.5)] animate-fade-in filter invert"
              src={MultiplayerIcon}
              alt="Multiplayer Quiz"
            />
          </div>
          <hr className="border-gray-600 w-full" />

          {/* Feature 3 */}
          <div className="w-full py-16 flex flex-col gap-8 md:flex-row justify-evenly items-center">
            <img
              className="w-full max-w-xs drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)] animate-fade-in"
              src={QuizIcon}
              alt="Quiz Icon"
            />
            <div className="flex flex-col gap-6">
              <h3 className="text-white text-2xl md:text-4xl animate-fade-move text-center md:text-left font-raleway">
                Prepare for Campus Placement
              </h3>
              <ul className="letter-animate text-white flex flex-col gap-4 p-6 md:p-12 bg-neutral-900 font-raleway font-light rounded-lg border border-gray-600 py-8">
                <li className="text-white text-base md:text-xl text-center animate-letter-pull-up">
                  Simulate real exam conditions for effective practice.
                </li>
                <li className="text-white text-base md:text-xl text-center animate-letter-pull-up">
                  Quizzes on CS Fundamentals.
                </li>
                <li className="text-white text-base md:text-xl text-center animate-letter-pull-up">
                  Test your knowledge with our most asked questions.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 w-full" />

        {/* Made For Whom Section */}
        <div className="bg-black w-full pb-32">
          <div className="w-full mt-20">
            <p className="text-4xl md:text-7xl text-white text-center">MADE FOR WHOM?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full px-4 md:px-10">
              {/* Education */}
              <div className="rounded-lg border border-gray-600 p-4 flex flex-col items-center">
                <img
                  className="w-1/2 m-auto mt-6 drop-shadow-lg animate-fade-in"
                  src={ExamPng}
                  alt="Education"
                />
                <p className="text-white text-2xl md:text-3xl font-bold mt-3 text-center shadow-md animate-fade-in">
                  EDUCATION
                </p>
                <div className="w-full mt-4 border border-gray-600 p-2">
                  <p className="text-white text-base md:text-lg font-light text-center p-3 animate-letter-pull-up">
                    IntelliQuiz automates quiz creation for teachers, students, and EdTech platforms, saving time, enhancing engagement, and ensuring personalized assessments for education, competitive exams, and adaptive learning.
                  </p>
                </div>
              </div>
              {/* Corporate Training */}
              <div className="rounded-lg border border-gray-600 p-4 flex flex-col items-center">
                <img
                  className="w-4/6 h-60 m-auto mt-6 drop-shadow-lg animate-fade-in"
                  src={EmpAssessment}
                  alt="Corporate Training"
                />
                <p className="text-white text-2xl md:text-3xl font-bold mt-4 text-center shadow-md animate-fade-in">
                  CORPORATE TRAINING
                </p>
                <div className="w-full mt-5 border border-gray-600 p-2">
                  <p className="text-white text-base md:text-lg font-light text-center p-3 animate-letter-pull-up">
                    IntelliQuiz automates quiz creation for corporate training, saving time, enhancing engagement, and ensuring effective employee assessments.
                  </p>
                </div>
              </div>
              {/* Self-Learning */}
              <div className="rounded-lg border border-gray-600 p-4 flex flex-col items-center">
                <img
                  className="w-5/6 m-auto mt-3 drop-shadow-lg animate-fade-in"
                  src={SelfLearning}
                  alt="Self-Learning"
                />
                <p className="text-white text-2xl md:text-3xl font-bold mt-3 text-center shadow-md animate-fade-in">
                  SELF-LEARNING
                </p>
                <div className="w-full mt-4 border-2 border-gray-600 p-2">
                  <p className="text-white text-base md:text-lg font-light text-center p-3 animate-letter-pull-up">
                    IntelliQuiz simplifies learning by generating quizzes from textbooks or content, helping users test knowledge, retain information, and master topics effectively through active recall.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 w-full" />

        {/* About Section */}
        <div className="bg-black w-full py-10">
          <div className="mt-10">
            <p className="text-4xl md:text-7xl text-white text-center">About us</p>
            <p className="text-white text-base md:text-xl p-6 md:p-14 mt-8 text-justify">
              IntelliQuiz turns any content into interactive quizzes, helping educators, students, and self-learners learn effectively. With features like multiplayer mode for collaborative learning and specialized preparation for campus placements, we aim to make learning engaging, accessible, and efficient for everyone.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
