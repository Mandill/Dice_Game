import React, { useState } from 'react'

const TotalScore = ({score,setScore}) => {
  return (
    <div className=' w-[100px] h-[100px]'>
        <div className='text-center'>
            <h1 className='text-[40px]'>{score}</h1>
            <p className=' text-[15px] font-bold'>Total Score</p>
        </div> 
    </div>
  )
}

export default TotalScore