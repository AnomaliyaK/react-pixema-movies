import { PixemaLogoDark } from "assets";
import { CustomLink } from "components";
import { Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { StyledAuthTemplate } from "./styles";

export const AuthTemplate = () => {
  return (
    <StyledAuthTemplate>
      <CustomLink to={ROUTE.HOME}>
        <PixemaLogoDark />
      </CustomLink>
      <Outlet />
      <p>© All Rights Reserved</p>
    </StyledAuthTemplate>
  );
};