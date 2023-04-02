import styled from "styled-components";
import { COLOR, MEDIA } from "ui";

export const StyledHomePage = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 40px;
  gap: 40px;
  grid-template-areas:
    "a"
    "b";
`;
export const WrapMovieList = styled.div`
  grid-area: a;
`;
export const WrapShowMoreButton = styled.div`
  grid-area: b;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  grid-template-areas: ". . b . .";
  justify-items: center;
  align-items: center;
`;
export const ShowMoreButton = styled.button`
  grid-area: b;
  height: 100%;
  width: 60%;
  background-color: ${COLOR.GRAPHITE};
  color: ${COLOR.WHITE};
  font-size: 16px;
  font-weight: 500;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  padding: 8px 24px;

  ${MEDIA.$_1440} {
    width: 100%;
  }
`;
