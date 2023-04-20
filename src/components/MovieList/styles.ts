import styled from "styled-components";
import { MEDIA } from "ui";

export const StyledMovieList = styled.ul`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(5, 1fr);
  ${MEDIA.$_1440} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${MEDIA.$_1280} {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
  }
  ${MEDIA.$_1024} {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  ${MEDIA.$_768} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  ${MEDIA.$_530} {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
`;
