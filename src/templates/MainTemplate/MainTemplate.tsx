import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Nav } from 'components';
import {
  LogoPixema,
  SlyledGroupNavLogo,
  StyledInput,
  StyledMainTemplate,
} from './styles';
import { Filters } from 'components/Filters/Filters';
import { CustomLink } from 'components/CustomLink/CustomLink';
import { ROUTE } from 'router';
import { auth } from '../../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useAppDispatch } from 'store/hooks/hooks';

export const MainTemplate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilters = () => {
    setIsOpen((prev) => !prev);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // dispatch(setUserAuth(user)); закончить этот action
      console.log(user);
    });
  }, [dispatch]);
  return (
    <StyledMainTemplate>
      <button onClick={toggleFilters}>Open Modal</button>
      {isOpen && <Filters title="FILTER" onClick={toggleFilters} />}
      <SlyledGroupNavLogo>
        <LogoPixema src="../../assets/image/pixema.png" alt="pixemaLogo" />
        <Nav />
        <Footer />
      </SlyledGroupNavLogo>
      <StyledInput type="text" placeholder="Search" />
      <CustomLink to={ROUTE.SIGN_UP}>Sign up</CustomLink>
      <Outlet />
    </StyledMainTemplate>
  );
};
