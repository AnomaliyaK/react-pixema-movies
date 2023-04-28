import styled from "styled-components";
import { COLOR } from "ui";

export const StyledBurgerMenu = styled.button`
  display: grid;
  justify-content: end;

  width: 100%;

  border: none;
  background-color: transparent;
`;

export const WrapCloseIcon = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 56px;
  height: 56px;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
`;
