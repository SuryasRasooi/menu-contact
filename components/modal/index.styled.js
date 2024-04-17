import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalStyles = styled(motion.div)`
  position: fixed;
  top: calc(50% - 160px);
  left: calc(50% - 230px);
  background: red;
  width: 470px;
  height: 320px;
  max-width: 95%;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 13px;
  background-color: #181818;
  color: #1a1a1a;
  transform-style: preserve-3d;
  padding: 30px;
  z-index: 100;
  /* -webkit-transform: translate3d(0, 0, 0); */
  .text-block {
    position: relative;
    display: flex;
    margin: 10px auto;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    line-height: 31px;
    text-align: center;
    object-fit: fill;
    display: flex;
    padding-top: 0px;
    font-family: "Montserrat", sans-serif;
    color: #a5a5a5;
    text-decoration: none;
  }
  .paragraph {
    margin-top: 0px;
    margin-bottom: 37px;
    font-family: "Montserrat", sans-serif;
    color: #a5a5a5;
    text-align: center;
    display: block;
    font-size: 12px;
    font-weight: 200;
  }
  .form-block {
    display: flex;
    flex-direction: column;
    form {
      .text-field {
        height: 45px;
        border-style: solid;
        border-width: 1px;
        border-color: #242424;
        border-radius: 5px;
        background-color: #1d1d1d;
        font-family: "Montserrat", Segoe, sans-serif;
        color: #f1f1f1;
        display: block;
        width: 100%;
        padding: 8px 12px;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 1.42857143;
        vertical-align: middle;
        border: 1px solid #cccccc;
      }
      .submit-button {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        background-color: #222;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        display: inline-block;
        padding: 9px 15px;
        color: white;
        border: 0;
        line-height: inherit;
        text-decoration: none;
        cursor: pointer;
        .loader-svg {
          .spinner_VpEe {
            animation: spinner_vXu6 1.2s cubic-bezier(0.52, 0.6, 0.25, 0.99)
              infinite;
          }
          .spinner_eahp {
            animation-delay: 0.4s;
          }
          .spinner_f7Y2 {
            animation-delay: 0.8s;
          }
          @keyframes spinner_vXu6 {
            0% {
              r: 0;
              opacity: 1;
            }
            100% {
              r: 11px;
              opacity: 0;
            }
          }
        }
      }
    }
  }
`;
