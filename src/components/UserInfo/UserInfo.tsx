// import { useToggle } from "hooks";
import { getUserAuth, useAppDispatch, useAppSelector } from "store";
import { Email, LogOutButton, SignInLink, StyledUserInfo, WrapLogOut, WrapUserIcon } from "./styles";
import { ArrowRightIcon, UserIcon } from "assets";
import { ROUTE } from "router";
import { CustomLink } from "components";
import { fetchSignOut } from "store/features/userSlice/userSlice";

export const UserInfo = () => {
  const { email, isAuth } = useAppSelector(getUserAuth);

  const userAuth = JSON.parse(localStorage.getItem("userAuth")!);
  if (userAuth) {
    userAuth.isAuth = false;
  }
  // const [toggle, setToggle] = useToggle(false);
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
          <Email>{email}</Email>
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
