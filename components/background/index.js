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
        <BackgroundStyles>
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
            >
                {/* Render multiple images side by side */}
                <img
                    src="/images/image1.jpeg"
                    alt="Image 1"
                    style={{ marginRight: "10px" }}
                />
                <img
                    src="/images/image2.jpeg"
                    alt="Image 2"
                    style={{ marginRight: "10px" }}
                />
                <img src="/images/image3.jpeg" alt="Image 3" />
            </motion.div>
        </BackgroundStyles>
    );
}
