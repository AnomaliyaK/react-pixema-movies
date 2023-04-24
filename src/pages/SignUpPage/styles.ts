import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledSignUpPage = styled.div`
  display: grid;
  gap: 36px;
  grid-template-rows: 36px 1fr 24px;
  width: 100%;
  height: 735px;
  padding: 40px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.DARK};
  border-radius: 10px;
`;
export const Title = styled.h2`
  ${Typography.H2}
`;

export const TextLink = styled.p`
  ${Typography.S3};
  font-weight: 500;
  text-align: center;
`;

export const LinkSignIn = styled.span`
  color: ${COLOR.PRIMARY};
`;

export const LinkSignUp = styled(Link)`
  ${Typography.S3}
  text-decoration: none;
  color: ${COLOR.PRIMARY};
`;
