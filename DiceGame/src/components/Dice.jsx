import React, { useState } from 'react'

const Dice = ({dice,random}) => {

    // useEffect(() => {
        
    //   }, [dice]);
    //   {`dice/dice_${dice}.png`}
  return (
    <div className='w-1200 flex justify-center items-center h-screen mx-auto mt-[-50px]'>
        <div className=' flex flex-col items-center'>
            <h1 className='font-bold text-[30px] mb-4'><img src={`dice/dice_${dice}.png`} alt='hello'/></h1>
            <button onClick={random} className='border-2 border-black my-2 px-5 rounded-lg bg-black text-white  hover:bg-white transition hover:text-black hover:border-2 '>ROLL THE DICE!!</button>
            <button className='border-2 border-black my-2 px-8 rounded-lg bg-black text-white hover:bg-white transition hover:text-black hover:border-2 '>How To Play?</button>
        </div>
    </div>
  )
}

export default Dice