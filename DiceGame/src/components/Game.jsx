import React from 'react'
import TotalScore from './TotalScore'
import Choice from './Choice'
import Dice from './Dice'
import { useState } from 'react'

const Game = () => {
  const [selected,setSelected] = useState(0)
  const [dice,setDice] =useState(1)
  const [score,setScore] = useState(0)

  const random = () =>
    {
        const randomDecimal = Math.random();

        const randomNumber = Math.floor(randomDecimal * 6) + 1;
      
         setDice((prev)=>randomNumber);

         if(selected == randomNumber)
         {
            setScore((prev)=>prev+randomNumber)
         }
         else
         {
          setScore((prev)=>prev-2)
         }
    }

  return (
    <>
        <div className='flex justify-between h-[100px] items-center w-[1200px] mx-auto mt-4'>
            <TotalScore score={score} setScore={setScore}/>
            <Choice selected = {selected} setSelected ={setSelected}/>
        </div>
        <Dice dice={dice} random={random}/>
    </>
  )
}

export default Game