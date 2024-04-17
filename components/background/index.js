import React from "react";
import { BackgroundStyles } from "./index.styled";
import { motion } from "framer-motion";

const editorCanvasVariant = {
  hidden: {
    transformX: "0px",
    transformY: "0px",
    transformZ: "0px",
    scaleX: 2,
    scaleY: 2,
    scaleZ: 2,
  },
  visible: {
    transformX: "0px",
    transformY: "0px",
    transformZ: "60px",
    scaleX: 0.75,
    scaleY: 0.75,
    scaleZ: 1,
  },
};

export default function Background() {
  return (
    <BackgroundStyles
    //   style="opacity: 1; background-color: rgb(0, 0, 0); transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
    >
      <motion.div
        className="editor-canvas"
        variants={editorCanvasVariant}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeIn",
          duration: 3,
          delay: 2,
        }}
      ></motion.div>
    </BackgroundStyles>
  );
}
