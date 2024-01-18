import React from 'react'

const Hero = ({toogle}) => {
  return (
    <div className='max-w-[1200px] max-h-[500px] mx-auto mt-[100px] flex'>
        <div><img src='/dices.png'/></div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[96px] font-bold'>DICE GAME</h1>
            <button onClick={toogle} className='max-w-[180px] px-7 py-1 bg-black text-white rounded-lg hover:bg-white transition hover:text-black hover:border-2 border-black'>Play Now</button>
        </div>
    </div>
  )
}

export default Hero