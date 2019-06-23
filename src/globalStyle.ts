import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
}

body {
  background-color: #fff;
  color: #212121;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 17px;
}
}
`;

export default GlobalStyle;
