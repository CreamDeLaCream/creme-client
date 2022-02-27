import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --main: #f69269;
        --lightorange: #fae5d6;
        --darkmain: #c65c31;
        --cream: #f5e9d5;
        --lightcream: #fdf7f1;
        --darkcream: #d6b4a1;
        --blackcream: #927d71;
        --deepcream: #6c584d;
        --darkbrown: #564132;
        --white: #ffffff;
        --gray: #a2a2a2;
        --lightgray: #fff7ea;
        --bggray: #fffdfa;
        --bgpink: #ffe2d6;
    }
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
  * {
        font-family: 'Jua';
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }


`;

export default GlobalStyle;
