import React from "react";
import { motion } from "motion/react";
const Button = ({ onClick }) => {
  return (
    <div>
      <motion.button
        type="button"
        className="border-2 p-2.5 rounded-3xl m-2.5 px-20"
        onClick={onClick}
        whileHover={{
          color:"#fffffe",
          backgroundColor:"#8200DB",
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(130, 0, 219, 0.9)",
        }}
      >
        <span>Exicute...</span>
      </motion.button>
    </div>
  );
};

export default Button;
