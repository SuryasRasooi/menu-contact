import styled from "styled-components";

export const SectionStyles = styled.div`
  max-width: 700px;
  flex-direction: column;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    max-width: 728px;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    img {
      display: inline-block;
      float: left;
    }
  }
  .text-block {
    position: static;
    display: flex;
    margin-top: 0px;
    margin-left: 4px;
    padding-top: 0px;
    padding-bottom: 0px;
    float: left;
    background-color: #ebebeb;
    background-image: linear-gradient(91deg, #ffffff 0%, #fdc6c0 100%);
    font-family: Inter, sans-serif;
    color: #fff;
    font-size: 16px;
    line-height: 26px;
    text-decoration: none;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -o-object-fit: fill;
    object-fit: fill;
  }
`;
