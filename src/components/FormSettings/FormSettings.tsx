import React, { useEffect, useState } from "react";
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

export const FormSettings = () => {
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
