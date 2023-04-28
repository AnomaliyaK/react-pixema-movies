import React from "react";
import { BurgerMenuIcon, CloseIcon } from "assets";
import { StyledBurgerMenu, WrapCloseIcon } from "./styles";

interface BurgerMenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu = ({ toggleMenu, isMenuOpen }: BurgerMenuProps) => {
  return (
    <StyledBurgerMenu onClick={toggleMenu}>
      {isMenuOpen ? (
        <WrapCloseIcon>
          <CloseIcon />
        </WrapCloseIcon>
      ) : (
        <BurgerMenuIcon />
      )}
    </StyledBurgerMenu>
  );
};
