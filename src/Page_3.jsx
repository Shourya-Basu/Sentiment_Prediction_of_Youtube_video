import React from 'react'
import Reply from "./Components/Reply/Reply";
import Review from "./Components/Review/Review";


const Page_3 = () => {
  const ti = "Tweets";
  return (
    <div className="flex overflow-hidden">
      <div className="flex-1"></div>
      <div className="flex-7 bg-white m-5 p-5 rounded-3xl flex flex-col  ">
        <h1 className="text-5xl font-Knewave text-center">Tweets</h1>
        <br />
        <div className="flex justify-center ">
          <h1>Tweets</h1>
        </div>
        <div className=" m-0.5 p-2.5 rounded-3xl">
          <h2 className="text-3xl font-Knewave flex justify-center items-center">Top Comment</h2>
          <Reply ti = {ti} />
          <br />
          <Reply ti = {ti}/>
          <br />
          <Reply ti = {ti}/>
        </div>
        <div className=" m-0.5 p-2.5 rounded-3xl my-2.5">
          <Review />
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  )
}

export default Page_3   