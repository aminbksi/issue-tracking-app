import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 12px;
    overflow: hidden;
  }
  
  #main {
    padding: 0 0 70px 0;
    display: flex;
    height: 100vh;
    background-color: #EDF4F2;
    z-index: 30;
  }
  
  .main-content {
    display: flex;
    width:100%;
    pointer-events: none;
    z-index: 1;
  }
  
  .scene-bg {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(32, 42, 68, .7);
  }
`;
