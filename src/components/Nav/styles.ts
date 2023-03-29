import styled from "styled-components";
import { COLOR } from "ui/color";

export const Navigation = styled.nav`
  display: grid;
  gap: 40px;
  font-size: 18px;
  font-weight: 600;
  color: ${COLOR.SECONDARY};
`;
export const CustomWrap = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
`;

export const Title = styled.span`
  color: ${COLOR.SECONDARY};
`;
