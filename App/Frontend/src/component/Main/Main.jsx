import React from 'react';
import { BorderBeamDemo } from '../Borderbeam/Borderbeam';
import { Link } from 'react-router-dom';
import MainMenuImage from '../../assets/MainMenuImage.png';

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-950 to-cyan-500 flex flex-col md:flex-row items-center justify-around md:gap-6 overflow-auto md:overflow-hidden">
      
      {/* Left Section: Navigation Links */}
      <div className="w-full md:w-1/2 h-auto mt-32 md:mt-20">
        <div className="w-full h-auto md:h-[600px] flex flex-col gap-6 justify-evenly px-4">
          <Link to="/aiquiz">
            <BorderBeamDemo name="AI Generated Quiz" />
          </Link>
          <Link to="/multiplayer">
            <BorderBeamDemo name="Multiplayer Online Mode" />
          </Link>
          <Link to="/mcqtest">
            <BorderBeamDemo name="Prepare for Internships & Campus Placements" />
          </Link>
          {/* Uncomment below if you need the dashboard link */}
          {/*
          <Link to="/userdashboard">
            <BorderBeamDemo name="User DashBoard" />
          </Link>
          */}
        </div>
      </div>

      {/* Right Section: Main Menu Image */}
      <div className="w-full md:w-1/3 h-auto mt-8 md:mt-20 flex flex-col items-center px-4 md:px-0 shadow-lg shadow-white">
        <img 
          src={MainMenuImage} 
          alt="Main Menu" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Main;
