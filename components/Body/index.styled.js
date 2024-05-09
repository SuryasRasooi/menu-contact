import styled from "styled-components";
import { motion } from "framer-motion";

export const WrapperDiv = styled.div`
    margin: 120px 0px 50px;

    @media only screen and (max-width: 480px) {
        width: 90%;
        margin: 120px auto 50px;
    }
`;

export const Section = styled.div`
    margin-bottom: 70px;
`;

export const Title = styled.h6`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    margin: 20px 0px 10px;
`;

export const Text = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
`;

export const Section2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
    margin: 150px auto 50px;
    padding: 50px 0px;
    background-color: #eeeeee;
    box-shadow: 0px 4px 10px 10px #05050536 inset;

    ul {
        list-style: none;
    }

    // @media only screen and (max-width: 768px) {
    //     grid-template-columns: 1fr 1fr;
    //     gap: 50px;
    // }

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 50px;
    }
`;

export const List = styled.div`
    li {
        font-family: "Montserrat", sans-serif;
        font-weight: 400;
        font-size: 20px;
        margin: 10px 0px;
    }
`;

export const Head = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 20px;
    margin: 0px 0px 35px;
`;
