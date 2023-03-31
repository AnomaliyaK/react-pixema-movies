import { css } from "styled-components";

export type Theme = "dark" | "light";

export const themeColor = css`
  html [theme="dark"] {
    --primary: #7b61ff;
    --primary_light: #917cff;
    --secondary: #80858b;
    --black: #000000;
    --dark: #242426;
    --graphite: #323537;
    --error: #ff5154;
    --light: #afb2b6;
    --white: #ffffff;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
  }

  html [theme="light"] {
    --primary: #7b61ff;
    --primaryy_light: #917cff;
    --secondary: #80858b;
    --black: #000000;
    /* --black: #ffffff; */
    --dark: #242426;
    --graphite: #ffffff;
    --error: #ff5154;
    --light: #afb2b6;
    --white: #000000;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
  }
`;
