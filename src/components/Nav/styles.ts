import styled from 'styled-components';
import { COLOR } from 'ui/color';

export const StyledNavigation = styled.nav`
  display: grid;
  gap: 40px;
  justify-content: start;
  align-content: start;
  min-height: 100%;
  margin-top: 132px;
  margin-bottom: -270px;
  font-size: 18px;
  font-weight: 600;
  color: ${COLOR.SECONDARY};
`;
