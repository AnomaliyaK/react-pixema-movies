import styled from "styled-components";
import { COLOR, Typography } from "ui";
import { MEDIA } from "ui/media";

export const StyledMovieItem = styled.li`
  display: grid;
  gap: 24px;
  width: 100%;
  ${MEDIA.$_1024} {
    gap: 20px;
  }
`;
export const WrapMovieItem = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 40px;
  gap: 24px;
  ${MEDIA.$_1024} {
    gap: 20px;
  }
`;

export const WrapPoster = styled.div``;

export const Poster = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
  object-position: top;
`;

export const MovieTitle = styled.span`
  ${Typography.S2};
  color: ${COLOR.WHITE};
  ${MEDIA.$_1024} {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`;
