import React, { useState } from 'react'

const Choice = ({selected,setSelected}) => {
    const possiblenum = [1,2,3,4,5,6]
    
  return (
    <div>
        <div className='flex mt-2'>
            {possiblenum.map((value,i)=>
                {
                 return <div  onClick={()=>setSelected(value)} className={selected === value ? 'cursor-pointer w-[50px] h-[50px] border-2 border-black m-2 text-center p-3 bg-black text-white':'cursor-pointer w-[50px] h-[50px] border-2 border-black m-2 text-center p-3'} key={i}>{value}</div>
                })}
        </div>
    <p className='font-bold text-end mt-2 mx-2'>Please Select a Number </p>
</div>
  )
}

export default Choice

// 'cursor-pointer w-[50px] h-[50px] border-2 border-black m-2 text-center p-3'