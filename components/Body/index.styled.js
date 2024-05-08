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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

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
