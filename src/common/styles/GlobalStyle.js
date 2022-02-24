import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --main: #f69269;
        --lightorange: #fae5d6;
        --cream: #f5e9d5;
        --lightcream: #fdf7ec;
        --darkcream: #d6b4a1;
        --blackcream: #927d71;
        --darkbrown: #221e1c;
        --white: #ffffff;
        --gray: #a2a2a2;
        --lightgray: #fff7ea;
        --bggray: #fffdfa;
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
