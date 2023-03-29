import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";
import { CustomLink } from "components";
import { ROUTE } from "../../router/routes";
import { CustomWrap, Navigation, Title } from "./styles";

export const Nav = () => {
  return (
    <Navigation>
      <CustomLink to={ROUTE.HOME}>
        <CustomWrap>
          <HomeIcon />
          <Title>Home</Title>
        </CustomWrap>
      </CustomLink>

      <CustomLink to={ROUTE.TRENDS}>
        <CustomWrap>
          <TrendsIcon />
          <Title>Trends</Title>
        </CustomWrap>
      </CustomLink>

      <CustomLink to={ROUTE.FAVORITES}>
        <CustomWrap>
          <FavoritesIcon />
          <Title>Favorites</Title>
        </CustomWrap>
      </CustomLink>

      <CustomLink to={ROUTE.SETTINGS}>
        <CustomWrap>
          <SettingsIcon />
          <Title>Settings</Title>
        </CustomWrap>
      </CustomLink>
    </Navigation>
  );
};
