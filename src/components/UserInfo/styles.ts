import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR, MEDIA, Typography } from "ui";

export const StyledUserInfo = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 56px 1fr 24px;
  height: 100%;
  ${MEDIA.$_1280} {
    grid-template-columns: 1fr 24px;
  }
`;
export const WrapUserIcon = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
  ${MEDIA.$_1280} {
    display: none;
  }
`;
export const Name = styled.div`
  display: grid;
  justify-items: start;
  align-items: center;
  padding: 0px 20px;
  ${MEDIA.$_1280} {
    padding: 0px 0px;
  }
`;
export const LogOutButton = styled.button`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;
export const SignInLink = styled.div`
  display: grid;
  justify-content: start;
  align-content: center;
  width: 100%;
  padding: 16px 0;
  ${Typography.S3};
  font-weight: 500;
  text-align: center;
`;

export const WrapLogOut = styled.div`
  display: grid;
  justify-items: start;
  align-items: center;
  height: 30px;
  width: 24px;
  border-left: 2.5px solid ${COLOR.PRIMARY};
  cursor: pointer;
`;
