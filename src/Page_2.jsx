import React, { useEffect, useState } from "react";
import Reply from "./Components/Reply/Reply";


const Page_2 = ({ Ydata, comments }) => {

  return (
    <div className="flex overflow-hidden">
      <div className="flex-1"></div>
      <div className="flex-7 bg-white m-5 p-5 rounded-3xl flex flex-col  ">
        <h1 className="text-5xl font-Knewave text-center">YouTube Videos</h1>
        <br />
        <div className="flex justify-center ">
          <iframe
            className="border-10 border-purple-800 m-2.5 rounded-3xl"
            width="800"
            height="500"
            src={Ydata}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className=" m-0.5 p-2.5 rounded-3xl">
          <h2 className="text-3xl font-Knewave flex justify-center items-center">
            Top Comments
          </h2>
          {comments?.map((c,key)=>(
            <Reply key={key} data={c}/>
          ))}
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Page_2;
