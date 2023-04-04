import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const InputSearchForm = styled.form`
  display: grid;
  grid-template-areas: "a";
  width: 100%;
  height: 100%;
`;
export const Input = styled.input`
  grid-area: a;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  ${Typography.S3};
  font-weight: 500;
  color: ${COLOR.SECONDARY};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
`;

export const OpenModalButton = styled.button`
  grid-area: a;
  width: 56px;
  justify-self: end;
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
