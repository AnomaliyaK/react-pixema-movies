import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledInputFilter = styled.input`
  width: 100%;
  padding: 16px 20px;
  ${Typography.S3};
  font-weight: 500;
  color: ${COLOR.SECONDARY};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
`;
