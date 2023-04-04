import styled from "styled-components";
import { COLOR, MEDIA, Typography } from "ui";

export const StyledMovieItem = styled.li`
  display: grid;
  gap: 24px;
  width: 100%;

  ${MEDIA.$_1024} {
    gap: 20px;
  }
`;
export const WrapMovieItem = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;
  gap: 24px;
  height: 100%;

  ${MEDIA.$_1024} {
    gap: 20px;
  }
`;

export const WrapPoster = styled.div``;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  border: none;
  object-fit: cover;
  object-position: top;
`;

export const MovieTitle = styled.span`
  ${Typography.S2};

  ${MEDIA.$_1024} {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const TrendsLabel = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 6px 8px;
  background-color: ${COLOR.PRIMARY};
  border-radius: 6px;
`;
