import styled from "styled-components";

export const TitlesStyles = styled.div`
    width: 100%;
    position: relative;
    display: block;
    overflow: visible;
    margin-top: 0px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0px;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
    backface-visibility: visible;
    text-align: center;
    object-fit: fill;
    transform-style: preserve-3d;
    background: #d2d2d2;

    /* -webkit-transform: translate3d(0%, 0%, 200px); */
    @media (max-width: 991px) {
        max-width: 800px;
    }

    & > div {
        position: relative;
        height: fit-content;
    }
    .animated {
        color: blue;
    }

    .animated:before {
        content: "draft up agreements";
        animation: changeText 7s infinite 3.5s;
        animation-delay: 7s;
    }

    @keyframes changeText {
        33% {
            content: "Special Meat Rices Dishes";
        }
        66% {
            content: "Veggie & Meat Curries";
        }
        100% {
            content: "Kebabs & Samosas";
        }
    }

    .heading {
        position: absolute;
        inset: 0px;
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Montserrat", sans-serif;
        color: #fff;
        font-size: 90px;
        // height: 100dvh;
        // transform: translate(0px, -50%);
        // font-weight: 600;
        // text-align: center;
        // white-space: nowrap;
        // flex-direction: row;
        // cursor: default;
        span {
            font-size: 70px;
            line-height: inherit;
            margin-bottom: 30px;
        }
        img {
            height: 90px;
            margin-top: 20px;
        }

        @media (max-width: 450px) {
            font-size: 50px;
            line-height: 60px;
            img {
                height: 50px;
            }
        }
    }
    .title-text {
        max-width: 700px;
        margin: 10px auto;
        margin-bottom: 10px;
        transform: translate(0px, 0px);
        font-family: "Montserrat", sans-serif;
        color: #fff;
        font-size: 55px;
        line-height: 65px;
        font-weight: 700;
        text-align: center;
        white-space: normal;
        @media (max-width: 450px) {
            font-size: 35px;
            line-height: 42px;
        }
    }
    .ceo-text {
        max-width: 700px;
        margin: 10px auto;
        font-style: italic;
        letter-spacing: 13px;
        font-weight: 200;
        color: #fff;
        font-size: 30px;
        line-height: 35px;
        font-weight: 700;
        text-align: center;
        white-space: normal;
        @media (max-width: 450px) {
            font-size: 25px;
            line-height: 32px;
        }
    }

    .brand-text {
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        word-break: break-all;
        transform: translate(0px, 0px);
        font-style: italic;
        font-weight: 200;
        letter-spacing: 10px;
        color: #fff;
        font-size: 36px;
        line-height: 88px;
        text-align: center;
        white-space: normal;
        @media (max-width: 450px) {
            font-size: 17px;
            line-height: 60px;
        }
    }
    .join-button {
        max-width: 300px;
        width: 100%;
        height: 50px;
        border-radius: 6px;
        box-shadow: 0 4px 10px #333333;
        margin: 0 auto;
        cursor: pointer;
        padding: 3px;
        background: linear-gradient(91deg, #ffffff 0%, #fdc6c0 100%);
        .cont {
            width: 100%;
            height: 100%;
            padding: 9px;
            color: white;
            border-radius: 5px;
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            font-weight: 600;
            display: inline-block;
            line-height: inherit;
            text-decoration: none;
            background: #000;

            @media (max-width: 1100px) {
                background: transparent
                    radial-gradient(
                        closest-side at 50% 50%,
                        #362e4c 0%,
                        #362e3e 100%
                    )
                    0% 0% no-repeat padding-box;
            }
        }
    }
    .link {
        font-size: 14px;
        color: #e4e4e4;
        display: block;
        margin: 30px auto;
        text-decoration: underline;
        font-family: "Montserrat", sans-serif;
    }
`;
