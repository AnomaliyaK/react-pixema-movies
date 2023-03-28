import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";
import { CustomLink } from "components";
import { ROUTE } from "../../router/routes";
import { StyledNavigation } from "./styles";

export const Nav = () => {
  return (
    <StyledNavigation>
      <CustomLink to={ROUTE.HOME}>
        <HomeIcon />
        Home
      </CustomLink>
      <CustomLink to={ROUTE.TRENDS}>
        <TrendsIcon />
        Trends
      </CustomLink>
      <CustomLink to={ROUTE.FAVORITES}>
        <FavoritesIcon />
        Favorites
      </CustomLink>
      <CustomLink to={ROUTE.SETTINGS}>
        <SettingsIcon />
        Settings
      </CustomLink>
    </StyledNavigation>
  );
};
