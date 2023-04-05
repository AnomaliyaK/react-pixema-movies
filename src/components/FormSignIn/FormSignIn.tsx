import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CustomLink } from "components/CustomLink/CustomLink";
import { fetchSignInUser, getUserAuth, useAppDispatch, useAppSelector } from "store";
import { emailValidate, passwordValidate } from "services";
import { ROUTE } from "router";
import {
  ButtonSignIn,
  ErrorMessage,
  InputEmail,
  InputPassword,
  ResetPassword,
  ResetPasswordText,
  StyledFormSignIn,
  SubTitle,
} from "./styles";

interface FormValues {
  email: string;
  password: string;
}

export const FormSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { errorMessage } = useAppSelector(getUserAuth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (user) => {
    dispatch(fetchSignInUser(user))
      .unwrap()
      .then(() => {
        navigate(ROUTE.HOME);
      });
  };

  // const userAuthSave = JSON.parse(localStorage.getItem("userAuth")!);
  // if (userAuthSave) {
  //   userAuthSave.isAuth = true;
  // }

  return (
    <StyledFormSignIn>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubTitle>Email</SubTitle>
        <InputEmail type="email" placeholder="Your email" {...register("email", emailValidate())} />
        {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <SubTitle>Password</SubTitle>
        <InputPassword type="password" placeholder="Your password" {...register("password", passwordValidate())} />
        {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <ResetPassword>
          <CustomLink to={ROUTE.RESET_PASSWORD}>
            <ResetPasswordText>Forgot password?</ResetPasswordText>
          </CustomLink>
        </ResetPassword>

        <ButtonSignIn type="submit">Sign in</ButtonSignIn>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </form>
    </StyledFormSignIn>
  );
};
