import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --main: #f69269;
        --lightorange: #fae5d6;
        --cream: #f5e9d5;
        --white: #ffffff;
        --gray: #a2a2a2;
        --lightgray: #f5f5f5;
    }

    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
  * {
        font-family: 'Jua', sans-serif;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

`;

export default GlobalStyle;
