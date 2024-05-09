import styled from "styled-components";
import { motion } from "framer-motion";

export const WrapperDiv = styled.div`
    padding: 100px 0px;
    @media only screen and (max-width: 480px) {
        width: 90%;
        margin: 0 auto;
    }

    div {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 20px;
    }
    .underline {
        text-decoration: underline;
    }
`;
