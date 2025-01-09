import React from 'react';
import AIimage from '../../assets/AI-Image.png';
import Block from '../Block/Block';
// ../Card/MagicCardDemo
import MagicCardDemo from '../Card/Card';
import Footer from '../Footer/Footer';
import Intelli_Img from '../../assets/Intelli_Img1.jpg'
import QuizIcon from '../../assets/QuizIcon2.png'
import ExamPng from '../../assets/exams.png'
import SelfLearning from '../../assets/Self_Learning.png'
import EmpAssessment from '../../assets/EMP_ASSESSMENT.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import brainImage from '../../assets/brain.png';
import MultiplayerIcon from '../../assets/multiplayer.png';

const Home = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/main');
  };
  const featuresRef = useRef(null);
  const listRef = useRef(null);

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
  useEffect(() => {
    if (listRef.current) {
      const listItems = listRef.current.querySelectorAll('li');
      listItems.forEach((item, index) => {
        const letters = item.textContent.split('');
        item.innerHTML = letters.map((letter, i) => `<span style="display: inline-block; animation: letter-pull-up 0.3s ease-out forwards; animation-delay: ${i * 0.02}s;">${letter}</span>`).join('');
      });
    }
  }, []);
  return (

    <>
    <div className='bg-black w-full min-h-screen flex flex-col items-center justify-center'>
      <div className='w-full min-h-screen scroll-smooth bg-black flex flex-col md:flex-row text-white '>
        <div className='w-full mt-12 md:mt-24 flex flex-col-reverse md:flex-row justify-between  px-4 md:px-0'>
          <div className=' p-4 md:ml-32 md:w-1/2 flex flex-col items-center gap-2'>
            <h2 className=' text-3xl md:text-8xl font-bold text-blue-300 mt-10 md:mt-40 animate-fade-move'>
              AI Driven Quiz
            </h2>
            <p className='mt-5  md:text-xl animate-fade-in '>
            Elevate your learning with AI-driven quizzes and multiplayer online modes, designed to make studying smarter and more engaging for students
            </p>
            
            <div className=' flex justify-center md:justify-start mt-28 mr-14'>
              <button onClick={handleClick}  className='bg-blue-700 font-semibold p-4 px-8 md:px-16 rounded-md shadow-xl shadow-transparent'>
                Get Started
              </button>
            </div>
          </div>
          <div className='flex justify-center md:justify-end md:w-1/2'>
            <img className='h-fit w-10/12 mr-10 mt-20  drop-shadow-[0_10px_15px_rgba(135,206,235,0.7)] animate-move-up-down' src={AIimage} alt='AI-Image' />
          </div>
         
        </div>
      </div>

      {/* --------- NEW SECTION --------------- */}

      <hr  className='border-white w-full'/>
      <div className='bg-black w-full min-h-screen mt-14 '>


       <div >
        <p ref={featuresRef} className='text-white text-7xl ml-16 p-4 font-bold '>Features</p>
      </div>
      <hr  className='border-white w-full'/>
       
        <div className='w-full min-h-full  py-24  flex flex-col gap-1 md:flex-row justify-evenly items-center '> 
          <img className='w-1/4 h-1/4 drop-shadow-[0_5px_5px_rgba(255,105,180,0.5)] animate-fade-in' src={brainImage} alt="" />
          <div className='flex flex-col gap-10'>
             <h3 className='text-white font-semibold  text-4xl animate-fade-move md:text-center  -mt-6'>PARAGAPH BASED AI QUIZ GENERATION</h3>
             <ul ref={listRef} className='text-white flex flex-col gap-4 p-12 bg-slate-900 border-spacing-1 rounded-lg border-2 border-white py-16 animate-border-beam' >
               <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem, ipsum dolor sit amet consectetur adipisicing elit..</li>
               <li className='text-white text-xl text-center animate-letter-pull-up  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
               <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
               {/* <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> */}
             </ul>
          </div>
        </div>
        <hr  className='border-white w-full'/>
        
        <div className='w-full min-h-full  py-24  flex flex-col gap-1 md:flex-row justify-evenly items-center '> 
        
        <div className='flex flex-col gap-10'>
             <h3 className='text-white font-semibold  text-4xl animate-fade-move md:text-center  -mt-6'>MULTIPLAYER QUIZ MODE</h3>
             <ul ref={listRef} className='text-white flex flex-col gap-4 p-12 bg-slate-900 border-spacing-1 rounded-lg border-2 border-white py-16' >
               <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem, ipsum dolor sit amet consectetur adipisicing elit..</li>
               <li className='text-white text-xl text-center animate-letter-pull-up  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
               <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
               {/* <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> */}
             </ul>
          </div>
          <img className='w-1/4 h-1/4 drop-shadow-[0_5px_5px_rgba(255,255,255,0.5)] animate-fade-in filter invert ' src={MultiplayerIcon} alt="" />
          
        </div>
        <hr  className='border-white w-full'/>
        <div className='w-full min-h-full  py-24  flex flex-col gap-1 md:flex-row justify-evenly items-center '> 
          <img className='w-1/4 h-1/4 drop-shadow-[0_5px_5px_rgba(255,255,255,0.7)] animate-fade-in' src={QuizIcon} alt="" />
          <div className='flex flex-col gap-10'>
             <h3 className='text-white font-semibold  text-4xl animate-fade-move md:text-center  -mt-6'>PREPARE FOR ONLINE ASSESSMENT</h3>
             <ul ref={listRef} className='text-white flex flex-col gap-4 p-12 bg-slate-900 border-spacing-1 rounded-lg border-2 border-white py-16 animate-border-beam' >
               <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem, ipsum dolor sit amet consectetur adipisicing elit..</li>
               <li className='text-white text-xl text-center animate-letter-pull-up  '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
               <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
               {/* <li className='text-white text-xl text-center animate-letter-pull-up '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li> */}
             </ul>
          </div>
        </div>

        
      </div>
      <hr  className='border-white w-full'/>


      {/* --------- NEW SECTION --------------- */}

        {/* <div className='border-2 border-x-pink-200 mt-14'>
        <p className='text-white text-7xl  mt-11 font-bold mr-40'>Features</p>
        </div> */}
      
        

      <div className='bg-black w-full min-h-screen pb-32'>
        <div className='w-full h-full mt-20 '>
          <p className='text-7xl text-white ml-8 text-center'>MADE FOR WHOM ?</p>
          {/* <p className='text-center text-white'>AND WHAT PROBLEM IT WILL SOLVE</p> */}
          <div className='flex gap-2 mt-10  w-full h-2/3 '>
            <div className='flex-1 rounded-lg border border-white'>
              {/* <h3 className='text-white text-center  font-semibold text-2xl'>EDUCATION</h3> */}
              <img className='w-1/2 m-auto mt-6 drop-shadow-[0_5px_10px_rgba(255,255,255,0.7)] animate-fade-in' src={ExamPng} alt="" />
              <p className='text-white text-3xl font-bold mt-3 text-center shadow-md animate-fade-in '>EDUCATION</p>
              <div className='w-5/6 mt-4 bg-slate-900 h-1/3 border border-pink m-auto'>
              <p className='text-white text-lg text-center m-auto mt-2 p-3 animate-letter-pull-up '>
              IntelliQuiz automates quiz creation for teachers, students, 
              and EdTech platforms, saving time, enhancing engagement, and ensuring personalized assessments for education, competitive exams,
              and adaptive learning.
                </p>
              </div>
            </div>
            <div className='flex-1 rounded-lg border border-white'>
              {/* <h3 className='text-white text-center  font-semibold text-2xl'>EDUCATION</h3> */}
              <img className='w-4/6 h-60 m-auto mt-6 drop-shadow-[0_5px_10px_rgba(255,255,255,0.7)] animate-fade-in' src={EmpAssessment} alt="" />
              <p className='text-white  text-3xl font-bold mt-4 text-center shadow-md animate-fade-in  '>CORPORATE TRAINING</p>
              <div className='w-5/6 mt-5 bg-slate-900 h-1/3 border border-pink m-auto'>
              <p className='text-white text-lg text-center m-auto mt-2 p-3 animate-letter-pull-up'>
                IntelliQuiz automates quiz creation for corporate training, saving time, 
                enhancing engagement, and ensuring effective employee assessments.
                </p>
              </div>
            </div>
            <div className='flex-1 rounded-lg border border-white'>
              {/* <h3 className='text-white text-center  font-semibold text-2xl'>EDUCATION</h3> */}
              <img className='w-5/6 h-1/2 m-auto mt-3 drop-shadow-[0_5px_10px_rgba(255,255,255,0.7)] animate-fade-in' src={SelfLearning} alt="" />
              <p className='text-white text-3xl font-bold mt-3 text-center shadow-md animate-fade-in '>SELF-LEARNING</p>
              <div className='w-5/6 mt-4 bg-slate-900 h-1/3 border-2 border-pink m-auto'>
                <p className='text-white text-lg text-center m-auto mt-2 p-3 animate-letter-pull-up '>
                IntelliQuiz simplifies learning by generating quizzes from textbooks or content, helping users test knowledge, retain information, and master 
                topics effectively through active recall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr  className='border-white w-full'/>
      <div className='bg-black w-full max-h-screen '>

        <div className='mt-10'>
          <p className='text-7xl text-white text-center ml-8 '>About us</p>

          <p className='text-white text-xl p-14 mt-8'>IntelliQuiz turns any content into interactive quizzes, helping educators, students, and self-learners learn effectively. With features like multiplayer mode for collaborative learning and specialized
             preparation for campus placements, we aim to make learning engaging, accessible, and efficient for everyone.</p>


          
          
        </div>
            
      </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
