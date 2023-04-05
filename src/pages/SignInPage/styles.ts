import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledSignInPage = styled.div`
  display: grid;
  gap: 40px;
  grid-template-rows: 36px 1fr 24px;
  width: 100%;
  height: 550px;
  padding: 40px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.DARK};
  border-radius: 10px;
  align-items: center;
`;
export const Title = styled.h2`
  ${Typography.H2}
`;

export const TextLink = styled.p`
  ${Typography.S3};
  font-weight: 500;
  text-align: center;
`;
export const LinkSignUp = styled.span`
  color: ${COLOR.PRIMARY};
`;
