import styled from "styled-components";
import { COLOR } from "ui";

export const StyledDetailsPage = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  color: ${COLOR.WHITE};
  grid-template-areas: "b b b b . ";
`;
export const WrapDetails = styled.div`
  grid-area: b;
`;
