import React, { useState } from "react";
import Link from "next/link";
import { WrapperDiv, ImagesContainer } from "./index.styled";
import ReactSwipe from "react-swipe";
import { useMediaQuery } from "usehooks-ts";

export default function Header() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const swipeOptions = {
        startSlide: 0,
        speed: 4000,
        auto: true,
        continuous: true,
    };
    return (
        <WrapperDiv>
            <Link href="/">
                <img
                    src="/images/Suryas-Rosooi-logo.png"
                    alt="Logo"
                    className="logo-fixed"
                />
            </Link>

            {isMobile ? (
                <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                    <div>
                        <img
                            src="/images/image1.jpeg"
                            alt="Logo"
                            className="food-image"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/image2.jpeg"
                            alt="Logo"
                            className="food-image"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/image3.jpeg"
                            alt="Logo"
                            className="food-image"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/image4.jpeg"
                            alt="Logo"
                            className="food-image"
                        />
                    </div>
                </ReactSwipe>
            ) : (
                <ImagesContainer>
                    <div>
                        <img
                            src="/images/image1.jpeg"
                            alt="Logo"
                            className="food-image"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/image2.jpeg"
                            alt="Logo"
                            className="food-image"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/image3.jpeg"
                            alt="Logo"
                            className="food-image"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/image4.jpeg"
                            alt="Logo"
                            className="food-image"
                        />
                    </div>
                </ImagesContainer>
            )}
        </WrapperDiv>
    );
}

// export default Header;
