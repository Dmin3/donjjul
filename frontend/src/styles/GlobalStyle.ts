/* eslint-disable import/no-extraneous-dependencies */
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  *{
    ${reset}
    box-sizing: border-box;
    text-decoration-line: none;
  }
 

`;

export default GlobalStyle;
