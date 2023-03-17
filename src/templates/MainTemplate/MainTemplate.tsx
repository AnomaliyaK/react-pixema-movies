import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Nav } from '../../components/Nav/Nav';
import {
  LogoPixema,
  SlyledGroupNavLogo,
  StyledInput,
  StyledMainTemplate,
} from './styles';

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <SlyledGroupNavLogo>
        <LogoPixema src="../../assets/image/pixema.png" alt="pixema" />
        <Nav />
        <Footer />
      </SlyledGroupNavLogo>

      <StyledInput type="text" placeholder="Search" />
      <Outlet />
    </StyledMainTemplate>
  );
};
