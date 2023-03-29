import styled from "styled-components";
import { COLOR } from "ui";

export const StyledMovieItem = styled.li`
  display: grid;
  gap: 24px;
  width: 266px;
`;

export const Poster = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 357px;
  margin-bottom: 24px;
  border: none;
`;

export const MovieTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${COLOR.WHITE};
`;
