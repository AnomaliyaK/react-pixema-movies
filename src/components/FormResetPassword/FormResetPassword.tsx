import React from "react";
import { ButtonResetPassword, ErrorMessage, InputEmail, Message, StyledFormResetPassword, SubTitle } from "./styles";
import { useToggle } from "hooks";
import { useNavigate } from "react-router-dom";
import { fetchResetPassword, useAppDispatch } from "store";
import { SubmitHandler, useForm } from "react-hook-form";

import { emailValidate } from "services";

interface FormValues {
  email: string;
}

export const FormResetPassword = () => {
  const [isToggle, setToggle] = useToggle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (user) => {
    await dispatch(fetchResetPassword(user)).unwrap();
    await setToggle();
    await reset();
  };

  return (
    <StyledFormResetPassword>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isToggle && <Message>You will receive an email a link to reset your password!</Message>}

        <SubTitle>Email</SubTitle>
        <InputEmail type="email" placeholder="Your email" {...register("email", emailValidate())} />
        {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <ButtonResetPassword type="submit">Reset</ButtonResetPassword>
      </form>
    </StyledFormResetPassword>
  );
};
