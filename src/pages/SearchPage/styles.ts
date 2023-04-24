import styled from "styled-components";
import { COLOR, Typography } from "ui";
import { MEDIA } from "ui/media";

export const StyledSearchPage = styled.div`
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
  ${MEDIA.$_1440} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: " . b .";
  }
  ${MEDIA.$_768} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas: "b";
  }
`;
export const ShowMoreButton = styled.button`
  grid-area: b;
  height: 100%;
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
  ${MEDIA.$_768} {
    width: 100%;
  }
`;
