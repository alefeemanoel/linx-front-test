import { createGlobalStyle } from "styled-components";
import { device } from "./device";

import "react-perfect-scrollbar/dist/css/styles.css";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background-image: linear-gradient(#66437e, #4a2563);
    
    @media ${device.laptopL} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'AvantGarde', 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
