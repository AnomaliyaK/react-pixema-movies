import { SubmitHandler, useForm } from "react-hook-form";
import { StyledSignUpPage } from "./styles";
import { useNavigate } from "react-router-dom";
import { AuthFormValues } from "types";
import { CustomLink, Loader } from "components";
import { ROUTE } from "router";
import { fetchSignUpUser, useAppDispatch, useAppSelector } from "store";

export const SignUpPage = () => {
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
    <StyledSignUpPage>
      <h1>Sign UP</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Name</p>
        <input type="text" placeholder="Your name" {...register("name")} />
        <p>Email</p>
        <input type="text" placeholder="Your email" {...register("email")} />
        <p>Password</p>
        <input type="password" placeholder="Your password" {...register("password")} />
        <p>Confirm password</p>
        <input type="password" placeholder="Confirm password" {...register("confirmPassword")} />

        <button type="submit">Submit {isLoading && <Loader />}</button>

        {errorMessage && <span>{errorMessage}</span>}
      </form>
      <p>Already have an account?</p>
      <CustomLink to={ROUTE.SIGN_IN}>Sign In</CustomLink>
    </StyledSignUpPage>
  );
};
