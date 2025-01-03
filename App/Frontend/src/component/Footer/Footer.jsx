import React from 'react'
// import React from 'react';
// import { FaFacebook } from "react-icons/fa"
import { FaFacebook } from "../../../node_modules/react-icons/fa";
import {  FaLinkedin } from "../../../node_modules/react-icons/fa6";
import {  FaInstagram } from "../../../node_modules/react-icons/fa";
import { FaSquareXTwitter } from "../../../node_modules/react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-black w-full py-8 border-t-2 border-white text-white'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-2xl font-bold ml-12 mt-3'>IntelliQuiz</h2>
          <p className='text-sm  ml-12 ' >Elevate your learning with AI-driven quizzes.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-4 ml-96'>
          <a href='#' className='text-sm hover:underline'>Home</a>
          <a href='#' className='text-sm hover:underline'>Features</a>
          <a href='#' className='text-sm hover:underline'>About Us</a>
          <a href='#' className='text-sm hover:underline'>Contact</a>
        </div>
        <div className='flex gap-2 mr-8'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-blue-500'>
          <FaFacebook />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-blue-400'>
          <FaSquareXTwitter />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-pink-500'>
          <FaInstagram />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-white hover:text-blue-700'>
          <FaLinkedin />
          </a>
        </div>
      </div>
      <div className='text-center mt-4'>
        <p className='text-xs'>&copy; 2024 IntelliQuiz. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

