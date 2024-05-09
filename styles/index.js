import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        width: 100%;
        height: 100vh;
        width: 100vw;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        overflow-x:hidden;
        transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
        &::-webkit-scrollbar {
            width: 0px;
            height: 0px;
            background: #ffffff;
        }
    }
    html{
        &:-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: #616161;
        border: 2px solid var(--color-gray-100);
    }
    #__next{
        background: #d2d2d2;
    }
    .main-wrapper {
    width: 95%;
    margin: 0 auto;
    background: #fff;
    }
    ul {
    margin: 0;
    padding: 0;
    }
}`;
