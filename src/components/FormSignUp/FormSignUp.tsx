import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchSignUpUser, getUserAuth, useAppDispatch, useAppSelector } from "store";
import { AuthFormValues } from "types";
import { Loader } from "components";
import { emailValidate, nameValidate, passwordValidate } from "services";
import { ButtonSubmit, ErrorMessage, Input, InputConfirmPassword, StyledFormSignUp, SubTitle } from "./styles";

export const FormSignUp = () => {
  const { isLoading, errorMessage } = useAppSelector(getUserAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm<AuthFormValues>();

  const onSubmit: SubmitHandler<AuthFormValues> = async (user) => {
    await dispatch(fetchSignUpUser(user)).unwrap();
    await navigate("/");
    await reset();
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <StyledFormSignUp>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SubTitle>Name</SubTitle>
        <Input type="text" placeholder="Your name" {...register("name", nameValidate())} />
        {errors.name?.message && <ErrorMessage>{errors.name.message}</ErrorMessage>}

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
