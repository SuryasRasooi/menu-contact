import styled from "styled-components";
import { motion } from "framer-motion";

export const Component = styled(motion.div)`
  position: fixed;
  width: 100%;
  z-index: 1;
  display: block;
  top: 0%;
  & > div {
    display: block;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-start;
    object-fit: fill;
    transform-style: preserve-3d;
    z-index: 5;
    max-width: 100%;
    padding: 20px;
    background-color: transparent;
    position: relative;
    &::before {
      content: " ";
      display: table;
      grid-column-start: 1;
      grid-row-start: 1;
      grid-column-end: 2;
      grid-row-end: 2;
    }
    .container {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      transform-style: preserve-3d;
      .navbar-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .navbar-brand {
          position: absolute;
          z-index: 5;
          display: block;
          flex: 0 auto;
          object-fit: fill;
        }
        .nav-menu-wrapper {
          width: 100%;
          position: relative;
          float: right;
          .nav-menu {
            position: relative;
            display: flex;
            margin: 6px 42px 0px;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            align-content: stretch;
            object-fit: fill;
            transform-style: preserve-3d;
            a {
              img {
                height: 30px;
              }
            }
          }
        }
      }
    }
  }
`;
