import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledSignUpPage = styled.div`
  display: grid;
  gap: 36px;
  grid-template-rows: 36px 1fr 24px;
  width: 100%;
  height: 732px;
  background-color: ${COLOR.DARK};
  padding: 40px;
  border-radius: 10px;
  color: ${COLOR.WHITE};
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
