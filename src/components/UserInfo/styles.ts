import styled from "styled-components";
import { COLOR, MEDIA, Typography } from "ui";

export const StyledUserInfo = styled.div``;
export const WrapUserIcon = styled.div``;

export const Email = styled.div`
  display: grid;
  align-items: center;
  ${MEDIA.$_1280} {
    display: none;
  }
`;
export const ArrowButton = styled.button``;
export const SignInLink = styled.div`
  grid-area: c;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 16px 0;
  ${Typography.S3};
  font-weight: 500;
  text-align: center;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
  ${MEDIA.$_1280} {
    display: none;
  }
`;

export const SettingsLink = styled.div`
  grid-area: c;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 16px 0;
  ${Typography.S3};
  font-weight: 500;
  text-align: center;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
  ${MEDIA.$_1280} {
    display: none;
  }
`;

export const SignUpLink = styled.div`
  grid-area: c;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 16px 0;
  ${Typography.S3};
  font-weight: 500;
  text-align: center;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
  ${MEDIA.$_1280} {
    display: none;
  }
`;

export const LogOutButton = styled.button``;
