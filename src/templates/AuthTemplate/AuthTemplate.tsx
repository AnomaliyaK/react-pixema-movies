import { PixemaLogoDark } from "assets";
import { CustomLink, Footer } from "components";
import { Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { GroupFooter, GroupLogo, StyledAuthTemplate, StyledOutlet } from "./styles";

export const AuthTemplate = () => {
  return (
    <StyledAuthTemplate>
      <GroupLogo>
        <CustomLink to={ROUTE.HOME}>
          <PixemaLogoDark />
        </CustomLink>
      </GroupLogo>

      <StyledOutlet>
        <Outlet />
      </StyledOutlet>

      <GroupFooter>
        <Footer />
      </GroupFooter>
    </StyledAuthTemplate>
  );
};
