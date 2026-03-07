import React, { useState } from 'react'
import Button from '../Button'
import Choise from '../Choise'


const Tweet = ({Links, setLinks, Opt, setOpt ,onClick}) => {

    
  const linkChange = (a) => {
    setLinks(a.target.value)
  }
  
  return (
    <div className='flex flex-col'>
      <textarea
        type='link'
        placeholder='Give the link of Tweet or YouTube' 
        className="w-[97%] h-46 p-3 m-2.5 justify-center rounded-3xl border-3 border-purple-700"
        value={Links}
        onChange={linkChange}
      />
      <div className='flex '>
        <div className='flex justify-center items-center flex-1'>
           <Button  onClick={onClick} /> 
        </div>
        <div className='flex justify-center items-center flex-1'>
          <Choise Opt={Opt} setOpt={setOpt} />
        </div>
      </div>
    </div>
  )
} 

export default Tweet    