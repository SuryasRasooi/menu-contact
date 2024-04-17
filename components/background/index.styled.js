import styled from "styled-components";

export const BackgroundStyles = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-image: url("/images/background.png");
  background-position: 50% 50%;
  background-size: cover;
  perspective: 2000px;
  .editor-canvas {
    position: relative;
    bottom: auto;
    display: flex;
    overflow: visible;
    width: 100%;
    height: 100%;
    /* margin-top: 30px; */
    background-image: url("/images/canvas.png");
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: scroll;
    backface-visibility: hidden;
    perspective: 2000px;
    transform: perspective(2000px) translate3d(0px, 0px, 52px);
    background-clip: padding-box;
    -webkit-text-fill-color: inherit;
    object-fit: contain;
    transform-style: preserve-3d;
    @media (max-width: 1100px) {
      display: none;
    }
  }
`;
