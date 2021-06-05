import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --main-background: #ecf1f8;
    --secondary-background: #e9afa3;
    --main-font-color:#333;
    --secondary-font-color:#FFF;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:  border-box;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: var(--main-background);
    color: var(--main-font-color);
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;
