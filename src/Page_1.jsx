import React, { useState, useEffect } from "react";
import Tweet from "./Components/Tweet/Tweet";
import { useNavigate } from "react-router-dom";

const Page_1 = ({setYdata, setComments}) => {
  
  const navigate = useNavigate();
  let [Links, setLinks] = useState(" ");
  let [Opt, setOpt] = useState("YouTube");

function Submit(){
  fetch("http://127.0.0.1:5000/home", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      Links,
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        if(Opt === "YouTube"){
          setYdata(data.embed_url)
          setComments(data.comments);
          navigate("/YouTube");
        }
        else if(Opt === "Tweeter"){
          navigate("/Tweet");
        }
        else{
          alert("Not select the options");
        }
      }
    })
    .catch(err => {
      console.error("Error:", err);
    });
}
return (
  <>
    <div className=" flex justify-center items-center h-screen  ">
      <div className="flex-1"></div>
      <div className="flex-7 bg-white m-5 p-5 rounded-3xl flex flex-col  ">
        <h1 className="text-5xl font-Knewave text-center">Comment reviews</h1>
        <br />
        <div>
          <Tweet Links={Links} setLinks={setLinks} Opt={Opt} setOpt={setOpt} onClick={Submit}/>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  </>
)
}

export default Page_1;
