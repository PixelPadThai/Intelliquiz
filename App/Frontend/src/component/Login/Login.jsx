

import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from '../../context/Firebase';

const Login = () => {
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
      if(firebase.sLoggedIn){
         navigate('/');
      }
  },[firebase,navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isLogin) {
      // Handle Registration
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      try {
        await firebase.signupUserWithEmailAndPassword(email, password);
        alert('Registration successful!');
        navigate('/main')
      } catch (error) {
        alert(`Invalid User`);
        alert("Error ",error);
      }
    } else {
      // Handle Login
      try {
        await firebase.signInWithEmailAndPass(email, password);
        alert('Login successful!');
        navigate('/main');
      } catch (error) {
        alert(`Invalid User`);
      }
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await firebase.signInWithGoogle();
      alert('Google Sign-In successful!');
      navigate('/');
    } catch (error) {
      alert(`Google Sign-In failed: ${error.message}`);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password Field for Registration */}
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <button
      // onClick={onClick}
      className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-600 border border-gray-300 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
       onClick={handleGoogleSignIn}   >
      <img
        src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
        alt="Google"
        className="w-5 h-5 mr-2"
      />
      Sign in with Google
    </button>

        {/* Toggle Form Button */}
        <p className="mt-4 text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleForm}
            className="font-medium text-blue-600 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
         
        </p>
      </div>
    </div>
  );
};

export default Login;

