import { BackgroundMovies } from "assets";
import styled from "styled-components";
import { COLOR } from "ui";

export const StyledAuthTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  /* grid-gap: 182px 40px; */
  grid-template-rows: 56px 1fr 40px;
  grid-template-areas:
    "a . . . . ."
    ". . b b . ."
    ". . c c . . ";
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  padding: 40px 62px 64px;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.WHITE};
  background: url(${BackgroundMovies});
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #252b49cc;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

export const GroupLogo = styled.div`
  grid-area: a;
  z-index: 2;

  /* position: fixed; */
`;
export const GroupFooter = styled.div`
  grid-area: c;
  display: grid;
  align-items: center;
  justify-items: center;
  z-index: 2;

  /* position: fixed; */
`;
export const StyledOutlet = styled.div`
  grid-area: b;
  z-index: 2;
  /* justify-items: center; */
  /* text-align: center; */
`;
