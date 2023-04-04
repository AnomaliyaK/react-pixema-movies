import { ReactNode } from "react";
import { NavLink, useMatch } from "react-router-dom";
import { ROUTE } from "router";

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
}

export const CustomLink = ({ children, to }: CustomLinkProps) => {
  const match = useMatch(to);
  return <NavLink to={to}>{children}</NavLink>;
};
