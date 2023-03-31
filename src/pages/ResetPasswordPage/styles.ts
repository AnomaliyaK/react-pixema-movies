import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledResetPasswordPage = styled.div`
  display: grid;
  gap: 40px;
  grid-template-rows: 36px 1fr 24px;
  width: 100%;
  height: 340px;
  background-color: ${COLOR.DARK};
  padding: 40px;
  border-radius: 10px;
  color: ${COLOR.WHITE};
  /* justify-items: center;
  align-items: center; */
`;
export const Title = styled.h2`
  ${Typography.H2}
`;
