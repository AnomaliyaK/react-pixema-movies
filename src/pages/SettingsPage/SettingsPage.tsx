import { FormSettings } from "components";
import { StyledSettingsPage } from "./styles";
import { getUserAuth, useAppSelector } from "store";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";

export const SettingsPage = () => {
  const { isAuth } = useAppSelector(getUserAuth);
  return isAuth ? (
    <StyledSettingsPage>
      <FormSettings />
    </StyledSettingsPage>
  ) : (
    <Navigate to={ROUTE.SIGN_IN} />
  );
};
