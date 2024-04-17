import styled, { css } from "styled-components";

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Item = styled.div`
  border: 4px solid #000000;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  max-width: 300px;
  transition: all 0.5s linear;
  ${({ active }) =>
    active &&
    css`
      border: 4px solid #51b1e7;
      .text {
        color: #51b1e7 !important;
      }
    `}

  .text {
    font-size: 16px;
    color: #000000;
    font-weight: 600;
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
  .check {
    width: 20px;
    height: 20px;
    @media (max-width: 500px) {
      width: 18px;
      height: 18px;
    }
    svg {
      width: 100%;
      height: 100%;
      fill: #51b1e7;
    }
  }
`;
