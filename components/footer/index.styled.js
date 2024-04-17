import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterStyles = styled(motion.div)`
  position: fixed;
  height: 40px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
  bottom: 0;
  font-size: 14px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  color: #7b7b7b;
  letter-spacing: 1px;
`;
