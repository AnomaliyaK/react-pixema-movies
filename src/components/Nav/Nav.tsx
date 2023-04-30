import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";
import { CustomLink, ThemeToggler, UserInfo } from "components";
import { ROUTE } from "router";
import { CustomWrap, Navigation, Title, UserInfoWrap, WrapThema } from "./styles";
import { useWindowSize } from "hooks";
import { getTheme, useAppSelector } from "store";

export const Nav = () => {
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1281;
  const { theme } = useAppSelector(getTheme);

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

      <WrapThema>
        {theme === "dark" ? "Dark" : "Light"} thema
        <ThemeToggler />
      </WrapThema>

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
