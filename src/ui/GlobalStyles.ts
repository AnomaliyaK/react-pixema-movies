import { createGlobalStyle } from "styled-components";
import { themeColors } from "ui";

export const GlobalStyles = createGlobalStyle`

${themeColors}

*{
    box-sizing: border-box;
    padding:0;
    margin:0;
    list-style: none;
    text-decoration:none;
    
}
body {
    font-family: 'Exo 2', sans-serif;
    font-weight: 600;
}`;
