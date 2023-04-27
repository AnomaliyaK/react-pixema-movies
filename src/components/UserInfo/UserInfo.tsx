// import { useToggle } from "hooks";
import { getUserAuth, useAppDispatch, useAppSelector } from "store";
import { LogOutButton, Name, SignInLink, StyledUserInfo, WrapLogOut, WrapUserIcon } from "./styles";
import { ArrowRightIcon, UserIcon } from "assets";
import { ROUTE } from "router";
import { CustomLink } from "components";
import { fetchSignOut } from "store/features/userSlice/userSlice";

export const UserInfo = () => {
  const { name, isAuth } = useAppSelector(getUserAuth);

  const userAuth = JSON.parse(localStorage.getItem("userAuth")!);
  if (userAuth) {
    userAuth.isAuth = false;
  }

  const dispatch = useAppDispatch();
  const handleOut = () => {
    dispatch(fetchSignOut());
  };
  return (
    <StyledUserInfo>
      <WrapUserIcon>
        <UserIcon />
      </WrapUserIcon>
      {isAuth ? (
        <>
          <Name>{name}</Name>
          <LogOutButton type="button" onClick={handleOut}>
            <WrapLogOut>
              <ArrowRightIcon />
            </WrapLogOut>
          </LogOutButton>
        </>
      ) : (
        <>
          <CustomLink to={ROUTE.SIGN_IN}>
            <SignInLink>Sign In</SignInLink>
          </CustomLink>
        </>
      )}
    </StyledUserInfo>
  );
};
