import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchSignUpUser, getUserAuth, useAppDispatch, useAppSelector } from "store";
import { Loader } from "components";
import { emailValidate, nameValidate, passwordValidate } from "services";
import { ButtonSubmit, ErrorMessage, Input, InputConfirmPassword, StyledFormSignUp, SubTitle } from "./styles";
import { ROUTE } from "router";

interface AuthFormValues {
  email: string;
  password: string;
  userName: string;
  confirmPassword: string;
  isAuth: boolean;
}

export const FormSignUp = () => {
  const { isLoading, errorMessage } = useAppSelector(getUserAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<AuthFormValues>();

  const onSubmit: SubmitHandler<AuthFormValues> = async (user) => {
    await dispatch(fetchSignUpUser(user)).unwrap();
    await navigate(ROUTE.HOME);
    await reset();
  };

  return (
    <StyledFormSignUp>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubTitle>Name</SubTitle>
        <Input type="text" placeholder="Your name" {...register("userName", nameValidate())} />
        {errors.userName?.message && <ErrorMessage>{errors.userName.message}</ErrorMessage>}

        <SubTitle>Email</SubTitle>
        <Input type="text" placeholder="Your email" {...register("email", emailValidate())} />
        {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <SubTitle>Password</SubTitle>
        <Input type="password" placeholder="Your password" {...register("password", passwordValidate())} />
        {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}

        <SubTitle>Confirm password</SubTitle>
        <InputConfirmPassword
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", { required: true })}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        {getValues("password") &&
          getValues("confirmPassword") &&
          getValues("password") !== getValues("confirmPassword") && <ErrorMessage>Passwords do not match</ErrorMessage>}

        <ButtonSubmit type="submit">Submit {isLoading && <Loader />}</ButtonSubmit>

        {errorMessage && <span>{errorMessage}</span>}
      </form>
    </StyledFormSignUp>
  );
};
