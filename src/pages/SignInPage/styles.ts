import styled from "styled-components";
import { COLOR } from "ui";
import { Typography } from "ui/typography";

export const StyledSignInPage = styled.div`
  display: grid;
  gap: 40px;
  grid-template-rows: 36px 1fr 24px;
  width: 100%;
  height: 100%;
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
export const LinkSignUp = styled.span`
  color: ${COLOR.PRIMARY};
`;
