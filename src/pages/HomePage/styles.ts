import styled from "styled-components";
import { COLOR, MEDIA, Typography } from "ui";

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;
  gap: 40px;
  grid-template-areas:
    "a"
    "b";
  width: 100%;
  height: 100%;
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
  padding: 8px 24px;
  ${Typography.S3}
  font-weight: 500;
  background-color: ${COLOR.GRAPHITE};
  border-radius: 40px;
  border: none;
  cursor: pointer;

  ${MEDIA.$_1440} {
    width: 100%;
  }
`;
