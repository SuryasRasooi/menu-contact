import React from "react";
import { TitlesStyles } from "./index.styled";
import { motion } from "framer-motion";
import Section from "../section";
import localFont from "@next/font/local";

const headingVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0,
  },
};

const ceoTextVariants = {
  visible: {
    opacity: 1,
    display: "block",
  },
  hidden: { opacity: 0 },
};
const titleTextVariants = {
  visible: {
    opacity: 1,
    display: "block",
  },
  hidden: { opacity: 0 },
};

const brandTextVariants = {
  visible: {
    opacity: 1,
    display: "block",
  },
  hidden: { opacity: 0 },
};

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/didot/didot-italic/font.otf",
      weight: "200",
      style: "italic",
    },
  ],
});
export default function Titles({ animate, setAnimate }) {
  const handleModalShow = () => {
    setAnimate(!animate);
  };
  return (
    <TitlesStyles className="safari-transform">
      <div>
        <motion.h1
          variants={headingVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ ease: "easeInOut", duration: 1, delay: 2 }}
          className="heading"
        >
         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div>Meet</div>
  <div><img className="img" src="/images/logo-white.png" /></div>
</div>
        </motion.h1>
        <motion.h4
          variants={ceoTextVariants}
          initial={"hidden"}
          transition={{ ease: "easeInOut", duration: 3, delay: 4 }}
          animate={"visible"}
          className={`ceo-text ${roboto.className}`}
        >
          .GPT powered.
        </motion.h4>
        <motion.h1
          variants={titleTextVariants}
          initial={"hidden"}
          transition={{ ease: "easeInOut", duration: 3, delay: 5 }}
          animate={"visible"}
          className="title-text"
        >
          ASK ANTHING HOME RELATED
        </motion.h1>
        <motion.h2
          variants={brandTextVariants}
          initial={"hidden"}
          transition={{ ease: "easeInOut", duration: 3, delay: 6 }}
          animate={"visible"}
          className={`brand-text animated ${roboto.className}`}
        ></motion.h2>
        <motion.div
          variants={brandTextVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ ease: "easeInOut", duration: 3, delay: 6 }}
        >
          <Section />
        </motion.div>
        <motion.button
          variants={brandTextVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ ease: "easeInOut", duration: 3, delay: 6 }}
          className="join-button"
        >
          <div className="cont" onClick={() => handleModalShow()}>
            Join Waitlist
          </div>
        </motion.button>

        <motion.a
          variants={brandTextVariants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ ease: "easeInOut", duration: 3, delay: 6 }}
          href="/"
          className="link"
        >
         
        </motion.a>
      </div>
    </TitlesStyles>
  );
}