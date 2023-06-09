import { BackgroundMovies } from "assets";
import styled from "styled-components";
import { COLOR, MEDIA } from "ui";

export const StyledAuthTemplate = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 56px 1fr 40px;
  grid-template-areas:
    "a . . . . ."
    ". . b b . ."
    ". . c c . . ";
  height: 100vh;
  width: 100vw;
  padding: 40px 62px 64px;
  color: ${COLOR.WHITE};
  background-size: 100% 100%;
  background: url(${BackgroundMovies});
  background-color: ${COLOR.BLACK};
  background-size: cover;
  background-repeat: no-repeat;
  ${MEDIA.$_1280} {
    grid-template-areas:
      "a . . . . ."
      ". b b b b ."
      ". c c c c . ";
  }
  ${MEDIA.$_768} {
    padding: 40px 24px 64px;
    grid-template-areas:
      "a . . . . ."
      "b b b b b b"
      "c c c c c c";
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
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
`;
export const GroupFooter = styled.div`
  grid-area: c;
  display: grid;
  align-items: center;
  justify-items: center;
  z-index: 2;
`;
export const StyledOutlet = styled.div`
  grid-area: b;
  display: grid;
  z-index: 2;
  justify-items: center;
  align-items: center;
`;
