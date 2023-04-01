import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CustomLink, Filters, Footer, Nav, Spinner } from "components";
import {
  GroupFooter,
  GroupLogo,
  GroupNav,
  OpenModalButton,
  SearchInput,
  SignInLink,
  StyledMainTemplate,
  StyledOutlet,
} from "./styles";
import { ROUTE } from "router";
import { FilterIcon, PixemaLogoDark } from "assets";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";
import { useAppDispatch, useAppSelector } from "store";

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
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilters = () => {
    setIsOpen((prev) => !prev);
  };
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
        <button onClick={toggleTheme}>Toggle Theme</button>
      </GroupNav>

      <GroupFooter>
        <Footer />
      </GroupFooter>

      <SearchInput type="text" placeholder="Search" />

      {/* модальное окно Filter */}
      <OpenModalButton onClick={toggleFilters}>
        <FilterIcon />
      </OpenModalButton>
      {isOpen && <Filters title="FILTER" onClick={toggleFilters} />}

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
      {/* </Container> */}

      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledMainTemplate>
  );
};
