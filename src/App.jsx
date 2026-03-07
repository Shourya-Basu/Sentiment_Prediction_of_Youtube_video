import { Router, Route, Navigate, Routes } from "react-router-dom";
import React, { useState } from "react";
import Page_1 from "./Page_1";
import Page_2 from "./Page_2";
import Page_3 from "./Page_3";

const App = () => {
  const [Ydata,setYdata] = useState("")
  const [comments, setComments] = useState([]);
  return (
    <div>
      <Routes>
        <Route 
          path='/'
          element={<Navigate to = "/home"/>}
        />
        <Route 
          path="/home"
          element={<Page_1 setYdata={setYdata} setComments={setComments} />}
        />
        <Route 
          path="/YouTube"
          element={<Page_2 Ydata={Ydata} comments={comments}/>}
        />
        <Route
          path="/Tweet"
          element={<Page_3  />}
        />
      </Routes>
    </div>
  );
};

export default App;
