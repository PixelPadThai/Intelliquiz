import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-full bg-pink-500 '>

      <div className=''>

       <label htmlFor="">Enter Your Email</label>
       <input type="email" required placeholder='Enter Email' />
       <label htmlFor="">Enter Your Password</label>
       <input type="password" required placeholder='Enter Password' />

       <button>Login</button>

      </div>

       
    </div>
  )
}

export default Login