import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledColorMode = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: " l m ";
  padding: 24px 40px;
  align-items: center;
  background-color: ${COLOR.DARK};
  border-radius: 10px;
`;
export const NameTheme = styled.div`
  grid-area: l;
`;
export const CurrentTheme = styled.div`
  margin-bottom: 8px;
  ${Typography.S3};
`;
export const TextTheme = styled.div`
  ${Typography.S3};
  font-weight: 500;
  color: ${COLOR.LIGHT};
`;
export const WrapThemeToggler = styled.div`
  grid-area: m;
  display: grid;
  justify-items: end;
`;
