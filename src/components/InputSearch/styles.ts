import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const InputSearchForm = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "a";
`;

export const Input = styled.input`
  grid-area: a;
  width: 100%;
  height: 100%;
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
  padding: 0 20px;
  ${Typography.S3};
  font-weight: 500;
  color: ${COLOR.SECONDARY};
  /* position: fixed; */
`;

export const OpenModalButton = styled.button`
  grid-area: a;
  background-color: ${COLOR.GRAPHITE};
  width: 56px;
  justify-self: end;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  /* position: fixed;
  */
`;
