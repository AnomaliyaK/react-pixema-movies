import { useToggle } from "hooks";
import React from "react";
import { getUserAuth, useAppSelector } from "store";
import {
  ArrowButton,
  Email,
  LogOutButton,
  SettingsLink,
  SignInLink,
  SignUpLink,
  StyledUserInfo,
  WrapUserIcon,
} from "./styles";
import { ArrowRightIcon, UserIcon } from "assets";
import { ROUTE } from "router";
import { CustomLink } from "components";

export const UserInfo = () => {
  const { email, isAuth } = useAppSelector(getUserAuth);
  const [toggle, setToggle] = useToggle(false);
  return (
    <StyledUserInfo>
      <WrapUserIcon>
        <UserIcon />
      </WrapUserIcon>
      {isAuth ? (
        <>
          <Email>{email}</Email>
          <ArrowButton onClick={setToggle}>
            <ArrowRightIcon />
          </ArrowButton>
        </>
      ) : (
        <>
          <CustomLink to={ROUTE.SIGN_IN}>
            <SignInLink>Sign In</SignInLink>
          </CustomLink>
          <ArrowButton onClick={setToggle}>
            <ArrowRightIcon />
          </ArrowButton>
        </>
      )}
      {toggle && (
        <>
          {isAuth ? (
            <>
              <CustomLink to={ROUTE.SETTINGS}>
                <SettingsLink> Edit</SettingsLink>
              </CustomLink>
              <LogOutButton type="button">Log out</LogOutButton>
            </> //add log out in user slice
          ) : (
            <>
              <CustomLink to={ROUTE.SIGN_UP}>
                <SignUpLink>Sign up</SignUpLink>
              </CustomLink>
            </>
          )}
        </>
      )}
    </StyledUserInfo>
  );
};
