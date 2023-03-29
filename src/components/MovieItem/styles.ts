import styled from "styled-components";
import { COLOR } from "ui";

export const StyledMovieItem = styled.li`
  display: grid;
  gap: 24px;
  width: 100%;
`;
export const WrapMovieItem = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 40px;
  gap: 24px;
`;

export const WrapPoster = styled.div``;

export const Poster = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  /* height: 357px; */
  /* margin-bottom: 24px; */
  border: none;
  object-fit: cover;
  object-position: top;
`;

export const MovieTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${COLOR.WHITE};
`;
