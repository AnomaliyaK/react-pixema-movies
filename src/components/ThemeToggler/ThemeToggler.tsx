import React, { useEffect } from "react";
import { getTheme, toggleMode, useAppDispatch, useAppSelector } from "store";
import { CustomSwitch, StyledFormControlLabel } from "./styles";

export const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getTheme);

  const handleChangeTheme = () => {
    dispatch(toggleMode());
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return <StyledFormControlLabel value="start" control={<CustomSwitch />} label="" onChange={handleChangeTheme} />;
};
