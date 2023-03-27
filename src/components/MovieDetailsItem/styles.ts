import styled from 'styled-components';
import { COLOR } from 'ui';

export const StyledMovieDetailsItem = styled.div`
  display: grid;
  grid-template-columns: 136px 1fr;
`;
export const MovieDetailsItemLabel = styled.div`
  color: ${COLOR.LIGHT};
`;
export const MovieDetailsItemValue = styled.div`
  color: ${COLOR.WHITE};
`;
