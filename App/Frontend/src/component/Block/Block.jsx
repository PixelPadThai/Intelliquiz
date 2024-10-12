import React from 'react'

const Block = (props) => {
  return (
    <div className='w-2/3 flex justify-center items-center h-1/5 bg-sky-400 rounded-md p-1 md:p-4 transition-all hover:scale-105 duration-500 '>
         <p className=' text-2xl'>{props.name}</p>
    </div>
  )
}

export default Block