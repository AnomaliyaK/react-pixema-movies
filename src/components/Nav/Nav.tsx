import React from 'react';
import { ROUTE } from '../../router/routes';
import { CustomLink } from '../CustomLink';
import { StyledNavigation } from './styles';

export const Nav = () => {
  return (
    <StyledNavigation>
      <CustomLink to={ROUTE.HOME}>Home</CustomLink>
      <CustomLink to={ROUTE.FAVORITES}>Favorites</CustomLink>
      <CustomLink to={ROUTE.SEARCH}>Search</CustomLink>
      <CustomLink to={ROUTE.SIGN_IN}>Sign in</CustomLink>
      <CustomLink to={ROUTE.SIGN_UP}>Sign up</CustomLink>
    </StyledNavigation>
  );
};
