import React from "react";
import { FooterStyles } from "./index.styled";

const brandTextVariants = {
  visible: {
    opacity: 1,
    display: "block",
  },
  hidden: { opacity: 0 },
};
export default function Footer() {
  return (
    <FooterStyles
      variants={brandTextVariants}
      initial={"hidden"}
      animate={"visible"}
      transition={{ ease: "easeInOut", duration: 3, delay: 6 }}
    >
      
    </FooterStyles>
  );
}
