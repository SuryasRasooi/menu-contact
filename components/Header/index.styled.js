import styled from "styled-components";
import { motion } from "framer-motion";

export const WrapperDiv = styled(motion.div)`
    padding-top: 80px;

    .carousel {
        // width: 90%;
        margin: 50px auto 10px;
    }
    .food-image {
        width: 100%;
        height: 290px;
        border-radius: 30px;
        box-shadow: 11px 11px 15px 1px #000000a6;
    }

    @media only screen and (max-width: 480px) {
        width: 90%;
        margin: 0 auto;
    }
`;

export const ImagesContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 0.7fr 0.8fr 0.5fr;
    width: 90%;
    margin: 80px auto 10px;

    .img {
        width: 100%;
        height: 250px;
        border-radius: 30px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`;
