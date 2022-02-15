import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --main: orange;
        --white: #ffffff;
    }

    /* @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap'); */
  * {
        /* font-family: 'Jua', sans-serif; */
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

`;

export default GlobalStyle;
