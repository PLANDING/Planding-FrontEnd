import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
    font-family: 'Noto Sans KR', sans-serif;
    }
    button{
    all: unset;
    cursor: pointer;
    }
    .main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    }
    .col-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    }
    .row-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    }
    form :is(input[type=text],input[type=password],input[type=url]){
    padding: 5px 10px;
    border: solid thin #BCBCBC;
    border-radius: 5px;
    }   
    a{
        all: unset;
    }
`;

export default GlobalStyle;