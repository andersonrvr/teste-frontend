import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  @media (min-width:768px) {
    section {
      display:flex;
      width:90%;
      height:80%;
      margin: 50px auto;
      border:1px solid #eee;
      justify-content:space-between;

    }
  }
  @media (min-width:1024px) {
    section {
      width:70%;
    }
  @media (min-width:1440px) {
    section {
      width:50%;
    }
    }
  }
`;

export default GlobalStyle;
