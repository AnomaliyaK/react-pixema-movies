import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledFormResetPassword = styled.div`
  width: 100%;
`;
export const SubTitle = styled.div`
  margin-bottom: 8px;
  ${Typography.S3};
`;
export const InputEmail = styled.input`
  width: 100%;
  padding: 16px 20px;
  margin-bottom: 24px;
  ${Typography.S3};
  font-weight: 500;
  color: ${COLOR.SECONDARY};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
`;
export const ButtonResetPassword = styled.button`
  width: 100%;
  padding: 16px;
  ${Typography.S3};
  border-radius: 10px;
  background-color: ${COLOR.PRIMARY};
`;
