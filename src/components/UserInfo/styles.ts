import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledUserInfo = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 56px 1fr 24px;
  height: 100%;
`;
export const WrapUserIcon = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
`;
export const Email = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;
export const LogOutButton = styled.button`
  display: grid;
  justify-items: center;
  align-items: center;
  color: ${COLOR.LIGHT};
  background-color: ${COLOR.BLACK};
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
  border-left: 2px solid ${COLOR.WHITE};
  cursor: pointer;
`;
