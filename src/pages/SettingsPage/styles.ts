import styled from "styled-components";
import { MEDIA } from "ui";

export const StyledSettingsPage = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: "a a a a . ";
  height: 100%;
  ${MEDIA.$_1280} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "a a a a ";
  }
  ${MEDIA.$_1024} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "a a  ";
  }
`;
