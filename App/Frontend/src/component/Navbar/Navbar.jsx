
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { CgProfile } from "react-icons/cg";
import { useFirebase } from "../../context/Firebase";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firebase = useFirebase();

  return (
    <div className="fixed  w-full bg-gray-900 shadow-lg shadow-slate-700 z-50 text-white">
      <div className="flex justify-between items-center h-28 px-8 lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center">
          <PsychologyIcon sx={{ fontSize: 60 }} className="mr-2" />
          <h3 className="text-4xl lg:text-5xl font-bold">IntelliQuiz</h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-raleway">
          <li className="hover:text-sky-400  text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-sky-400 text-lg">
            <Link to="/main">Enter</Link>
          </li>
          <li className="hover:text-sky-400  text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          
          {firebase.isLoggedIn ? (
            <CgProfile className="w-8 h-8 cursor-pointer" />
          ) : (
            <li className="py-2 px-4 text-white bg-transparent border-2 border-white rounded-md ">
              <Link to="/signUp">Login / Register</Link>
            </li>
          )}
        </ul>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center bg-gray-800 py-4 lg:hidden">
          <li className="hover:text-sky-400 font-semibold text-lg py-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="hover:text-sky-400 font-semibold text-lg py-2">
            <Link to="/main" onClick={() => setIsMenuOpen(false)}>Enter</Link>
          </li>
          
          <li className="hover:text-sky-400 font-semibold text-lg py-2">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </li>
          {firebase.isLoggedIn ? (
            <CgProfile className="w-8 h-8 cursor-pointer py-2" />
          ) : (
            <li className="py-2 px-4 text-white bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black hover:font-semibold transition-all duration-300">
              <Link to="/signUp" onClick={() => setIsMenuOpen(false)}>
                Login / Register
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

