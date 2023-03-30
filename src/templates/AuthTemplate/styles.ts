import { BackgroundMovies } from "assets";
import styled from "styled-components";
import { COLOR } from "ui";

export const StyledAuthTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 182px 40px;
  grid-template-rows: 56px 1fr 40px;
  grid-template-areas:
    "a . . . . ."
    ". . b b . ."
    ". . c c . . ";
  min-height: 100vh;
  min-width: 100vh;
  padding: 40px 62px 64px;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.WHITE};
  background: url(${BackgroundMovies});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const GroupLogo = styled.div`
  grid-area: a;
  /* position: fixed; */
`;
export const GroupFooter = styled.div`
  grid-area: c;
  display: grid;
  align-items: center;
  justify-items: center;

  /* position: fixed; */
`;
export const StyledOutlet = styled.div`
  grid-area: b;
`;
