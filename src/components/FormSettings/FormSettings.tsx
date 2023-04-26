import { getTheme, getUserAuth, toggleMode, useAppDispatch, useAppSelector } from "store";
import {
  BattonGroup,
  ButtonCancel,
  ButtonSave,
  ColorModeGroup,
  ConfirmPasswordGroup,
  EmailGroup,
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
  return (
    <StyledFormSettings>
      <Form action="">
        <div>
          <Title>Profile</Title>
          <ProfileGroup>
            <NameGroup>
              <SubTitle>Name</SubTitle>
              <Input type="text" />
            </NameGroup>
            <EmailGroup>
              <SubTitle>Email</SubTitle>
              <Input type="text" />
            </EmailGroup>
          </ProfileGroup>
        </div>
        <div>
          <Title>Password</Title>
          <PasswordGroup>
            <PasswordGroupInput>
              <SubTitle>Password</SubTitle>
              <Input type="password" />
            </PasswordGroupInput>
            <NewPasswordGroup>
              <SubTitle>New password</SubTitle>
              <Input type="password" />
            </NewPasswordGroup>
            <ConfirmPasswordGroup>
              <SubTitle>Confirm password</SubTitle>
              <Input type="password" />
            </ConfirmPasswordGroup>
          </PasswordGroup>
        </div>
        <div>
          <Title>Color mode</Title>
          <ColorModeGroup>
            <NameTheme>
              <SubTitle>Dark</SubTitle>
              <TextTheme>Use dark thema</TextTheme>
            </NameTheme>

            <SwitchTheme>Toggle Theme</SwitchTheme>
          </ColorModeGroup>
        </div>
        <BattonGroup>
          <ButtonCancel>Cancel</ButtonCancel>
          <ButtonSave>Save</ButtonSave>
        </BattonGroup>
      </Form>
    </StyledFormSettings>
  );
};
