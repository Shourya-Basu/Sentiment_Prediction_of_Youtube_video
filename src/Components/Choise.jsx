import React, { useState } from "react";
import { motion } from "motion/react";
const Choise = ({ Opt, setOpt }) => {
  const opt = (a) => {
    setOpt(a.target.value);
  };
  return (
    <div>
      <form>
        <motion.select
          className="border-2 p-2.5 rounded-3xl m-2.5 px-20"
          value={Opt}
          onChange={opt}
          whileHover={{
            color: "#fffffe",
            backgroundColor: "#8200DB",
            boxShadow: "0px 0px 20px rgba(130, 0, 219, 0.9)",
          }}
        >
          <option value="Youtube">YouTube</option>
          {/* <option value="Tweeter">Tweeter</option> */}
        </motion.select>
      </form>
    </div>
  );
};

export default Choise;
