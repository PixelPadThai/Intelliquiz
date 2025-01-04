import React from 'react'
import { Link } from 'react-router-dom'
import PsychologyIcon from '@mui/icons-material/Psychology';
import Home from '../Home/Home';

const Navbar = () => {
  return (
    //fixed remove
    <div className='fixed flex w-full h-28   bg-gray-900 justify-between z-50 items-center shadow-lg shadow-slate-700 text-white '>
        <div className="ml-10 flex">
              <PsychologyIcon sx={{fontSize:60}} className='mr-1'/>
              {/* <Icon></Icon> */}
              <h3 className='text-5xl font-bold mt-1'>IntelliQuiz</h3>
        </div>

        <div className='flex items-center list-none mr-72 gap-7 max-w-16'>
    <li className='hover:text-sky-400'>
        <Link to='/'>Home</Link>
    </li>
    <li className='hover:text-sky-400'>
        <Link to='/main'>Enter</Link>
    </li>
    <li className='py-2 px-4 text-white bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black hover:font-semibold transition-all duration-300' style={{ minWidth: '150px', textAlign: 'center' }}>
        <Link to='/signUp'>Login / Register</Link>
    </li>
</div>



        
            
        


    </div>
  )
}

export default Navbar