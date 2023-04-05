import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CustomLink, Filters, Footer, InputSearch, Nav, UserInfo } from "components";
import { ROUTE } from "router";
import { ArrowRightIcon, PixemaLogoDark } from "assets";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";
import { useAppDispatch, useAppSelector } from "store";
import { useToggle } from "hooks";
import { getUserAuth } from "store";
import {
  // Email,
  GroupFooter,
  GroupLogo,
  GroupNav,
  SearchInputGroup,
  // SignInLink,
  StyledMainTemplate,
  StyledOutlet,
  ToggleThemeButtons,
} from "./styles";

export const MainTemplate = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [isOpen, toggleModal] = useToggle();
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // dispatch(setUserAuth(user)); закончить этот action
      console.log(user);
    });
  }, [dispatch]);

  return (
    <StyledMainTemplate>
      <GroupLogo>
        <CustomLink to={ROUTE.HOME}>
          <PixemaLogoDark />
        </CustomLink>
      </GroupLogo>

      <GroupNav>
        <Nav />
        <ToggleThemeButtons onClick={toggleTheme}>Toggle Theme</ToggleThemeButtons>
      </GroupNav>

      <GroupFooter>
        <Footer />
      </GroupFooter>
      <SearchInputGroup>
        <InputSearch toggleModal={toggleModal} />
      </SearchInputGroup>

      <Filters isOpen={isOpen} toggleModal={toggleModal} />

      <UserInfo />

      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledMainTemplate>
  );
};
