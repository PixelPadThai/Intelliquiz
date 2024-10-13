import React from 'react'
import Card from '../../component/Card/Card'


const MCQTest = () => {
  return (
    <>
    <div className='fixed flex items-center justify-center h-screen w-full p-32 bg-violet-50'>

      <div className='flex gap-7 justify-center h-2/3 w-full mt-14 '>
        <Card className='bg-orange-300 rounded-lg shadow-md  shadow-black' heading={'Prepare CS fundamentals'} data={'Top 20 Most Asked MCQs'} route={'/mcqtest/CS_fundamentals'} />
        <Card className='bg-yellow-400 rounded-lg shadow-md  shadow-black' heading={'Master DSA fundamentals'} data={'Top 20 Most Asked MCQs'} route={'/mcqtest/DSA_fundamentals'} />
        <Card className='bg-orange-400 rounded-lg shadow-md  shadow-black' heading={'Crack Online Assessment'} data={'Top 20 Most Asked MCQs on CS Fundamentals'} route={'/mcqtest/Online_Assessment'} />
        
      </div>
    
    </div>
    
    </>
  )
}

export default MCQTest