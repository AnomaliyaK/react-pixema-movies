import React from "react";
import { BurgerMenuIcon, CloseIcon } from "assets";
import { BurgerMenuOpen, GroupFooter, StyledBurgerMenu, UserInfoWrap, Wrap, WrapCloseIcon, WrapNav } from "./styles";
import { ROUTE } from "router";
import { CustomLink, Footer, Nav, UserInfo } from "components";

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
