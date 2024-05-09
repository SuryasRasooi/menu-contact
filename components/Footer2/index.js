import { useState } from "react";
import { WrapperDiv } from "./index.styled";

export default function Footer2() {
    const [animate, setAnimate] = useState(false);
    return (
        <WrapperDiv>
            <div>Contact us</div>
            <div>Email: suryasrasooi@gmail.com </div>
            <div>Tel: 07944317000</div>
        </WrapperDiv>
    );
}
