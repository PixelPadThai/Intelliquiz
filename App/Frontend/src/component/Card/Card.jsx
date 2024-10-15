import React from 'react'
import AiImage from '../../assets/AI-Image.png'
import { BorderBeam } from '../magicui/border-beam'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Card = (props) => {
  
  const navigate=useNavigate();

  function handleNavigation(){
      navigate(props.route);
  }
   



  return (
    
    <div className={`w-2/5 p-2  bg-cyan-200 ${props.className}  duration-300 `}>
        <h3 className='text-3xl text-center mt-8 text-pretty bg-white py-5'>{props.heading}</h3>
        
        <p className='text-center bold mt-3'>{props.data}</p>

        
        <Link to={props.route}><button onClick={handleNavigation} className=' mt-32 ml-36 px-6 rounded-md p-2 bg-slate-800 text-white hover:bg-slate-700'>Start Quiz</button></Link>
        
      
    </div>
  
  )
}

export default Card
