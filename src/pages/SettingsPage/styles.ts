import styled from "styled-components";
import { COLOR } from "ui";

export const StyledSettingsPage = styled.div`
  display: grid;
  height: 100%;
  gap: 40px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "a a a a . ";
`;
