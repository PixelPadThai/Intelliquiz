// import React from 'react'
// // import { FaUser } from "react-icons/fa";
// import { FaUser } from "../../../node_modules/react-icons/fa";


// const Login = () => {
//   return (
//     <div className='w-screen h-screen bg-black flex justify-center items-center text-white'>

//       <div className='fixed border-2 border-white  backdrop-blur-lg shadow-md shadow-white   rounded-xl flex flex-col  w-1/3 h-2/3 mt-28 p-4'>
     
//       <h1 className='text-5xl text-semibold text-center  mt-5 '>SIGNUP USER</h1>
//        <label htmlFor="" className='mt-14'>UserName</label>
//        <FaUser />
//        <input className='p-2 rounded-lg bg-transparent' type="email" required placeholder='Enter UserName' />
//        <label htmlFor="" className=''>Email</label>
//        <input className='p-2 rounded-lg' type="email" required placeholder='Enter Email' />
//        <label htmlFor="">Password</label>
//        <input className='p-2 rounded-lg' type="password" required placeholder='Enter Password' />
//        {/* <button className='p-2 bg-purple-950 rounded-md text-white mt-4 '>Signin With Google</button> */}

       
 
//        <button className='p-2 text-white rounded-md m-auto my-14  w-1/5 bg-purple-900'>SignUp </button>

//       </div>

       
//     </div>
//   )
// }

// export default Login


import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
        <div className='flex flex-col gap-4'>
          <label htmlFor="username" className='mt-14'>UserName</label>
          <div className='flex items-center border border-gray-300 rounded p-2'>
            <FaUser className='text-gray-500 mr-2' />
            <input
              type='text'
              id='username'
              className='flex-1 outline-none '
              placeholder='Enter your username'
            />
          </div>
          <label htmlFor="password" className='mt-1'>Password</label>
          <div className='flex items-center border border-gray-300 rounded p-2'>
            <FaLock className='text-gray-500 mr-2' />
            <input
              type='password'
              id='password'
              className='flex-1 outline-none'
              placeholder='Enter your password'
            />
          </div>
          <a className='text-blue-800  hover:text-blue-500'>Forgot Password?</a>
          <button className='bg-blue-500 text-white py-2 px-4 rounded mt-6'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;