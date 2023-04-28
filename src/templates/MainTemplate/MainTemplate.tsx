import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { BurgerMenu, CustomLink, Filters, Footer, InputSearch, Nav, UserInfo } from "components";
import { ROUTE } from "router";
import { PixemaLogoDark } from "assets";
import { useToggle, useWindowSize } from "hooks";
import { setAuth, unsetAuth, useAppDispatch } from "store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {
  GroupFooter,
  GroupLogo,
  GroupNav,
  SearchInputGroup,
  StyledMainTemplate,
  StyledOutlet,
  ToggleThemeButtons,
  UserInfoWrap,
} from "./styles";

export const MainTemplate = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuth(user));
      } else {
        dispatch(unsetAuth());
      }
    });
  }, [dispatch]);

  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1281;

  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [isOpen, toggleModal] = useToggle();

  return (
    <StyledMainTemplate>
      <GroupLogo>
        <CustomLink to={ROUTE.HOME}>
          <PixemaLogoDark />
        </CustomLink>
      </GroupLogo>

      <SearchInputGroup>
        <InputSearch toggleModal={toggleModal} />
      </SearchInputGroup>

      <Filters isOpen={isOpen} toggleModal={toggleModal} />

      {isMobile ? (
        <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      ) : (
        <>
          <GroupNav>
            <Nav />
          </GroupNav>
          <GroupFooter>
            <Footer />
          </GroupFooter>
          <UserInfoWrap>
            <UserInfo />
          </UserInfoWrap>
        </>
      )}

      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledMainTemplate>
  );
};
