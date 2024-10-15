import React from 'react'

const Login = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-r backdrop-blur-md from-indigo-500 via-purple-500 to-pink-500  flex justify-center items-center text-white'>

      <div className='fixed border-2 border-white  backdrop-blur-lg shadow-md shadow-white   rounded-xl flex flex-col  w-1/3 h-2/3 mt-28 p-4'>
     
      <h1 className='text-5xl text-semibold text-center  mt-5 '>SIGNUP USER</h1>
       <label htmlFor="" className='mt-14'>UserName</label>
       <input className='p-2 rounded-lg' type="email" required placeholder='Enter UserName' />
       <label htmlFor="" className=''>Email</label>
       <input className='p-2 rounded-lg' type="email" required placeholder='Enter Email' />
       <label htmlFor="">Password</label>
       <input className='p-2 rounded-lg' type="password" required placeholder='Enter Password' />
       <button className='p-2 bg-purple-950 rounded-md text-white mt-4 '>Signin With Google</button>

       
 
       <button className='p-2 text-white rounded-md m-auto my-14  w-1/5 bg-purple-900'>SignUp </button>

      </div>

       
    </div>
  )
}

export default Login