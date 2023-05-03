import React from "react";
import { BurgerMenuIcon, CloseIcon } from "assets";
import { BurgerMenuOpen, GroupFooter, StyledBurgerMenu, Wrap, WrapCloseIcon, WrapNav } from "./styles";
import { Footer, Nav } from "components";

interface BurgerMenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu = ({ toggleMenu, isMenuOpen }: BurgerMenuProps) => {
  return (
    <StyledBurgerMenu onClick={toggleMenu}>
      {isMenuOpen ? (
        <Wrap>
          <WrapCloseIcon>
            <CloseIcon />
          </WrapCloseIcon>
          <BurgerMenuOpen>
            <WrapNav>
              <Nav />
            </WrapNav>
          </BurgerMenuOpen>

          <GroupFooter>
            <Footer />
          </GroupFooter>
        </Wrap>
      ) : (
        <BurgerMenuIcon />
      )}
    </StyledBurgerMenu>
  );
};
