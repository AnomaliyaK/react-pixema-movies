import styled from "styled-components";
import { COLOR } from "ui";

export const StyledBurgerMenu = styled.button`
  display: grid;
  justify-content: end;
  width: 100%;
  min-height: 100vh;
  border: none;
  background-color: transparent;
`;
export const Wrap = styled.div`
  display: grid;
  min-width: 266px;
  /* grid-template-columns: 1fr 56px; */
  grid-template-rows: 56px 1fr 56px;
  /* grid-template-areas: "a b" "c c" "d d"; */
  gap: 40px;
  height: 100%;
  /* position: absolute;
 */
  z-index: 10;
  background-color: ${COLOR.GRAPHITE};
  padding: 35px;
`;

export const WrapCloseIcon = styled.div`
  /* grid-area: b; */
  display: grid;
  justify-content: center;
  align-content: center;
  width: 56px;
  height: 56px;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
`;

export const WrapNav = styled.div``;

export const BurgerMenuOpen = styled.div`
  /* position: absolute;
  z-index: 10;
  background-color: orange; */
`;

export const UserInfoWrap = styled.div`
  /* grid-area: c; */
`;

export const GroupFooter = styled.div`
  /* grid-area: d; */
`;
