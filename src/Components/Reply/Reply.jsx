import React from 'react'

  
const Reply = ({data}) => {


  return (
    <div className="flex justify-between overflow-hidden bg-blue-50 p-2 rounded-2xl">
      <div className=' flex-7 p-4'>
        <p>{data.comment}</p>
      </div>
      <div className='flex-1 flex items-center  '>
        <div className='bg-gray-100 text-black text-2xl px-9 py-4 rounded-2xl'>
            <h1>{data.sentiment}</h1>
          </div>
      </div>  
    </div>
  )
}

export default Reply