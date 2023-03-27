import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Nav } from 'components';
import {
  LogoPixema,
  SlyledGroupNavLogo,
  StyledInput,
  StyledMainTemplate,
  WrapLogoPixema,
} from './styles';
import { Filters } from 'components/Filters/Filters';
import { CustomLink } from 'components/CustomLink/CustomLink';
import { ROUTE } from 'router';
import { auth } from '../../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';

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
      {/* модальное окно Filter */}
      <button onClick={toggleFilters}>Open Modal</button>
      {isOpen && <Filters title="FILTER" onClick={toggleFilters} />}
      <SlyledGroupNavLogo>
        <WrapLogoPixema>
          <LogoPixema
            src="../../assets/icons/pixema-dark-icon.png"
            alt="pixemaLogo"
          />
        </WrapLogoPixema>

        <Nav />
        <Footer />
      </SlyledGroupNavLogo>
      <StyledInput type="text" placeholder="Search" />
      <CustomLink to={ROUTE.SIGN_UP}>Sign up</CustomLink>
      <CustomLink to={ROUTE.SIGN_IN}>Sign In</CustomLink>
      {/* данные зарегистрированного пользователя */}
      {isAuth && (
        <>
          <p>{email}</p>
          <p>Creation Time: {creationTime}</p>
        </>
      )}
      <Outlet />
    </StyledMainTemplate>
  );
};
