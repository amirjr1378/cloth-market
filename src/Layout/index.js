import React from 'react';
import Header from './Header';
import Main from './Main';
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
   * , *::before, *::after{
      box-sizing: border-box;
   }
   svg {
      user-select: none;
      cursor: pointer;
   }
   a, a:hover {
      color: black;
      text-decoration: none;
   }

`
function Layout({ ...props }) {
   return (
      <div>
         <Global />
         <Header />
         <Main />
      </div>
   );
}

export default Layout;
