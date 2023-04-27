import React from "react";
import { CurrentTheme, NameTheme, StyledColorMode, TextTheme, WrapThemeToggler } from "./styles";
import { getTheme, useAppSelector } from "store";
import { ThemeToggler } from "components";

export const ColorMode = () => {
  const { theme } = useAppSelector(getTheme);

  return (
    <StyledColorMode>
      <NameTheme>
        <CurrentTheme>{theme === "light" ? "Light" : "Dark"}</CurrentTheme>
        <TextTheme>Use {theme === "light" ? "light" : "dark"} thema</TextTheme>
      </NameTheme>
      <WrapThemeToggler>
        <ThemeToggler />
      </WrapThemeToggler>
    </StyledColorMode>
  );
};
