'use client';

import localFont from 'next/font/local';
import { createGlobalStyle } from 'styled-components';

const roboto = localFont({
  src: [
    {
      path: '../assets/fonts/roboto/Roboto-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: ${roboto.style.fontFamily};
    min-height: 100vh;
    background-color: #262626;
  }

`;
