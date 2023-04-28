import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";
import { CustomLink, UserInfo } from "components";
import { ROUTE } from "router";
import { CustomWrap, Navigation, Title, UserInfoWrap } from "./styles";
import { useWindowSize } from "hooks";

export const Nav = () => {
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1281;
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

      {isMobile && (
        <>
          <UserInfoWrap>
            <UserInfo />
          </UserInfoWrap>
        </>
      )}
    </Navigation>
  );
};
