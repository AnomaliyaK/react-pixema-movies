import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Nav } from 'components';
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
        <LogoPixema src="../../assets/image/pixema.png" alt="pixemaLogo" />
        <Nav />
        <Footer />
      </SlyledGroupNavLogo>
      <StyledInput type="text" placeholder="Search" />
      <Outlet />
    </StyledMainTemplate>
  );
};
