import { CustomLink } from "components/CustomLink/CustomLink";
import React, { useState } from "react";
import { ROUTE } from "router/routes";
import {
  ButtonSignIn,
  InputEmail,
  InputPassword,
  ResetPassword,
  ResetPasswordText,
  StyledFormSignIn,
  SubTitle,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { getUserAuth, useAppDispatch, useAppSelector } from "store";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

export const FormSignIn = () => {
  // const [errorMessage, setErrorMessage] = useState<string | null>(null);
  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  // const { isLoading } = useAppSelector(getUserAuth);

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<FormValues>();

  // const userAuthSave = JSON.parse(localStorage.getItem("userAuth")!);
  // if (userAuthSave) {
  //   userAuthSave.isAuth = true;
  // }

  // закончить

  // const onSubmit: SubmitHandler<FormValues> = (userAuth) => {
  //   setErrorMessage(null);
  //   dispatch(signInUser(userAuth))
  //     .unwrap()
  //     .then(() => {
  //       localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
  //       navigate(`${ROUTE.HOME}`);
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error);
  //       reset();
  //     });
  // };

  return (
    <StyledFormSignIn>
      <form action="">
        <SubTitle>Email</SubTitle>
        <InputEmail type="text" placeholder="Your email" />
        <SubTitle>Password</SubTitle>
        <InputPassword type="password" placeholder="Your password" />
        <ResetPassword>
          <CustomLink to={ROUTE.RESET_PASSWORD}>
            <ResetPasswordText>Forgot password?</ResetPasswordText>
          </CustomLink>
        </ResetPassword>

        <ButtonSignIn type="submit">Sign in</ButtonSignIn>
      </form>
    </StyledFormSignIn>
  );
};
