import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { BurgerMenu, CustomLink, Filters, Footer, InputSearch, Nav, ThemeToggler, UserInfo } from "components";
import { ROUTE } from "router";
import { PixemaLogoDark, PixemaLogoLight } from "assets";
import { useToggle, useWindowSize } from "hooks";
import { getTheme, setAuth, unsetAuth, useAppDispatch, useAppSelector } from "store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {
  GroupFooter,
  GroupLogo,
  GroupNav,
  SearchInputGroup,
  StyledMainTemplate,
  StyledOutlet,
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
  const { theme } = useAppSelector(getTheme);

  const [isOpen, toggleModal] = useToggle();

  return (
    <StyledMainTemplate>
      <GroupLogo>
        <CustomLink to={ROUTE.HOME}>{theme === "dark" ? <PixemaLogoDark /> : <PixemaLogoLight />}</CustomLink>
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
