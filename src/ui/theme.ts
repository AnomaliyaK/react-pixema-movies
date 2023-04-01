import { css } from "styled-components";

export const themeColors = css`
  [theme="dark"] {
    --primary: #7b61ff;
    --primary-light: #917cff;
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

  [theme="light"] {
    --primary: #7b61ff;
    --primaryy-light: #917cff;
    --secondary: #80858b;
    --black: #ffffff;
    --dark: #80858b;
    --graphite: #afb2b6;
    --error: #ff5154;
    --light: #afb2b6;
    --white: #000000;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
  }
`;
