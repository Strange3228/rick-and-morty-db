import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.65rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #40b3a2;
        }
    }
    body{
        background-color: #85cdca;
        font-family: 'Lato', sans-serif;
    }
    h2{
        font-size: 3rem;
    }
    h3{
        font-size: 1.3rem;
    }
    p{
        font-size: 1.2rem;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;
