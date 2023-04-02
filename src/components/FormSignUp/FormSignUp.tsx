import React from "react";
import { fetchSignUpUser, useAppDispatch, useAppSelector } from "store";
import { AuthFormValues } from "types";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { Loader } from "components";
import { ButtonSubmit, Input, InputConfirmPassword, StyledFormSignUp, SubTitle } from "./styles";

export const FormSignUp = () => {
  const { register, handleSubmit, reset } = useForm<AuthFormValues>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);

  const onSubmit: SubmitHandler<AuthFormValues> = async (authFormValues) => {
    await dispatch(fetchSignUpUser(authFormValues)).unwrap();
    await reset();
    await navigate("/");
  };

  return (
    <StyledFormSignUp>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubTitle>Name</SubTitle>
        <Input type="text" placeholder="Your name" {...register("name")} />
        <SubTitle>Email</SubTitle>
        <Input type="text" placeholder="Your email" {...register("email")} />
        <SubTitle>Password</SubTitle>
        <Input type="password" placeholder="Your password" {...register("password")} />
        <SubTitle>Confirm password</SubTitle>
        <InputConfirmPassword type="password" placeholder="Confirm password" {...register("confirmPassword")} />

        <ButtonSubmit type="submit">Submit {isLoading && <Loader />}</ButtonSubmit>

        {errorMessage && <span>{errorMessage}</span>}
      </form>
    </StyledFormSignUp>
  );
};
