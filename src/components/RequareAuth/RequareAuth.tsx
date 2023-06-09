import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { getUserAuth, useAppSelector } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(getUserAuth);

  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
