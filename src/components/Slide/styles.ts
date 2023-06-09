import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const SlideMovie = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SlidePoster = styled.img`
  max-height: 357px;
  max-width: 266px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 15px;
`;

export const Title = styled.h4`
  margin-top: 20px;
  ${Typography.S3};
  color: ${COLOR.WHITE};
  max-width: 266px;
`;
