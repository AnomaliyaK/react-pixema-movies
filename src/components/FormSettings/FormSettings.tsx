import {
  fetchUpdateEmail,
  fetchUpdatePassword,
  getTheme,
  getUserAuth,
  toggleMode,
  updateUserName,
  useAppDispatch,
  useAppSelector,
} from "store";
import {
  BattonGroup,
  ButtonCancel,
  ButtonSave,
  ColorModeGroup,
  ConfirmPasswordGroup,
  EmailGroup,
  ErrorMessage,
  Form,
  Input,
  NameGroup,
  NameTheme,
  NewPasswordGroup,
  PasswordGroup,
  PasswordGroupInput,
  ProfileGroup,
  StyledFormSettings,
  SubTitle,
  SwitchTheme,
  TextTheme,
  Title,
} from "./styles";
import { useToggle } from "hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { emailValidate, nameValidate, passwordValidate } from "services";
interface FormValues {
  userName: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const FormSettings = () => {
  const { theme } = useAppSelector(getTheme);

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { errorMessage, name, email } = useAppSelector(getUserAuth);
  const [isOpen, setToggle] = useToggle(false);

  const onSubmit: SubmitHandler<FormValues> = async (user) => {
    try {
      await dispatch(updateUserName(user.userName));
      await dispatch(fetchUpdateEmail(user)).unwrap();
      await dispatch(fetchUpdatePassword(user)).unwrap();

      setTimeout(() => {
        setToggle();
      }, 1000);
      setTimeout(() => {
        navigate(ROUTE.HOME);
      }, 3500);
    } catch (error) {}
  };

  const handleNavigateHome = () => {
    navigate(ROUTE.HOME);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  return (
    <StyledFormSettings>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Title>Profile</Title>
          <ProfileGroup>
            <NameGroup>
              <SubTitle>Name</SubTitle>
              <Input
                type="text"
                defaultValue={name ? name : "User name"}
                placeholder="Your name"
                {...register("userName", nameValidate())}
              />
              {errors.userName?.message && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
            </NameGroup>
            <EmailGroup>
              <SubTitle>Email</SubTitle>
              <Input
                type="text"
                defaultValue={email ? email : "User email"}
                placeholder="Your email"
                {...register("email", emailValidate())}
              />
              {errors.email?.message && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </EmailGroup>
          </ProfileGroup>
        </div>
        <div>
          <Title>Password</Title>
          <PasswordGroup>
            <PasswordGroupInput>
              <SubTitle>Password</SubTitle>
              <Input type="password" placeholder="Your password" {...register("password", passwordValidate())} />
            </PasswordGroupInput>
            {errors.password?.message && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <NewPasswordGroup>
              <SubTitle>New password</SubTitle>
              <Input type="password" placeholder="New Password" {...register("newPassword", passwordValidate())} />
            </NewPasswordGroup>
            {errors.newPassword?.message && <ErrorMessage>{errors.newPassword.message}</ErrorMessage>}
            <ConfirmPasswordGroup>
              <SubTitle>Confirm password</SubTitle>
              <Input
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", passwordValidate())}
              />
              {errors.confirmPassword?.message && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
              {getValues("newPassword") &&
                getValues("confirmPassword") &&
                getValues("newPassword") !== getValues("confirmPassword") && (
                  <ErrorMessage>Passwords do not match</ErrorMessage>
                )}
            </ConfirmPasswordGroup>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </PasswordGroup>
        </div>
        <div>
          <Title>Color mode</Title>
          <ColorModeGroup>
            <NameTheme>
              <SubTitle>Dark</SubTitle>
              <TextTheme>Use dark thema</TextTheme>
            </NameTheme>

            <SwitchTheme onClick={toggleTheme}>Toggle Theme</SwitchTheme>
          </ColorModeGroup>
        </div>
        <BattonGroup>
          <ButtonCancel type="button" onClick={handleNavigateHome}>
            Cancel
          </ButtonCancel>
          <ButtonSave type="submit">Save</ButtonSave>
        </BattonGroup>
      </Form>
    </StyledFormSettings>
  );
};
