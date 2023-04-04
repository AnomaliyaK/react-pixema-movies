import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledResetPasswordPage = styled.div`
  display: grid;
  gap: 40px;
  grid-template-rows: 36px 1fr 24px;
  width: 100%;
  height: 340px;
  padding: 40px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.DARK};
  border-radius: 10px;
`;
export const Title = styled.h2`
  ${Typography.H2}
`;
