import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CustomLink, Filters, Footer, InputSearch, Nav } from "components";
import {
  GroupFooter,
  GroupLogo,
  GroupNav,
  SearchInputGroup,
  SignInLink,
  StyledMainTemplate,
  StyledOutlet,
  ToggleThemeButtons,
} from "./styles";
import { ROUTE } from "router";
import { PixemaLogoDark } from "assets";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";
import { useAppDispatch, useAppSelector } from "store";
import { useToggle } from "hooks";

export const MainTemplate = () => {
  // переключение темы
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // открытие фильтра
  const [isOpen, toggleModal] = useToggle();
  const dispatch = useAppDispatch();
  const { email, creationTime, isAuth } = useAppSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // dispatch(setUserAuth(user)); закончить этот action
      console.log(user);
    });
  }, [dispatch]);

  return (
    <StyledMainTemplate>
      {/* <Container> */}
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

      <Filters title="FILTER" isOpen={isOpen} toggleModal={toggleModal} />

      {/* данные зарегистрированного пользователя */}
      {isAuth ? (
        <>
          <p>{email}</p>
          <p>Creation Time: {creationTime}</p>
        </>
      ) : (
        <CustomLink to={ROUTE.SIGN_IN}>
          <SignInLink>Sign In</SignInLink>
        </CustomLink>
      )}
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledMainTemplate>
  );
};
