import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CustomLink, Filters, Footer, Nav, Spinner } from "components";
import {
  GroupFooter,
  GroupLink,
  GroupLogo,
  GroupNav,
  OpenModalButton,
  SearchInput,
  SignInLink,
  SignUpLink,
  StyledMainTemplate,
  StyledOutlet,
} from "./styles";
import { ROUTE } from "router";
import { FilterIcon, PixemaLogoDark } from "assets";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebase";
import { useAppDispatch, useAppSelector } from "store";

export const MainTemplate = () => {
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
      <GroupLogo>
        <CustomLink to={ROUTE.HOME}>
          <PixemaLogoDark />
        </CustomLink>
      </GroupLogo>

      <GroupNav>
        <Nav />
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
        <GroupLink>
          <SignInLink>
            <CustomLink to={ROUTE.SIGN_IN}>Sign In</CustomLink>
          </SignInLink>
          <SignUpLink>
            <CustomLink to={ROUTE.SIGN_UP}>Sign up</CustomLink>
          </SignUpLink>
        </GroupLink>
      )}
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </StyledMainTemplate>
  );
};

{
  /* данные зарегистрированного пользователя */
}
// {isAuth && (
//   <>
//     <p>{email}</p>
//     <p>Creation Time: {creationTime}</p>
//   </>
// )}
