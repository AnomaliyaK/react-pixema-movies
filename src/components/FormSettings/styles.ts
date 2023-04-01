import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledFormSettings = styled.div`
  grid-area: a;
  width: 100%;
  height: 100%;
  /* background-color: ${COLOR.PRIMARY_LIGHT}; */
`;
export const Form = styled.form`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  gap: 40px;
  height: 100%;
`;
export const Title = styled.h2`
  ${Typography.H2};
  margin-bottom: 16px;
`;
export const ProfileGroup = styled.div`
  display: grid;
  gap: 0 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: " e f ";
  background-color: ${COLOR.DARK};
  padding: 40px;
  border-radius: 10px;
`;

export const NameGroup = styled.div`
  grid-area: e;
`;

export const EmailGroup = styled.div`
  grid-area: f;
`;

export const PasswordGroup = styled.div`
  display: grid;
  gap: 0 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: " x y " " . z ";
  background-color: ${COLOR.DARK};
  padding: 40px;
  border-radius: 10px;
`;

export const PasswordGroupInput = styled.div`
  grid-area: x;
`;
export const NewPasswordGroup = styled.div`
  grid-area: y;
  margin-bottom: 24px;
`;
export const ConfirmPasswordGroup = styled.div`
  grid-area: z;
`;

export const ColorModeGroup = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: " l m ";
  background-color: ${COLOR.DARK};
  padding: 24px 40px;
  border-radius: 10px;

  align-items: center;
`;
export const NameTheme = styled.div`
  grid-area: l;
`;
export const TextTheme = styled.div`
  ${Typography.S3};
  font-weight: 500;
  color: ${COLOR.LIGHT};
`;
export const SwitchTheme = styled.button`
  grid-area: m;
  text-align: end;
`;

export const SubTitle = styled.div`
  ${Typography.S3};
  margin-bottom: 8px;
`;
export const Input = styled.input`
  background-color: ${COLOR.GRAPHITE};
  width: 100%;
  ${Typography.S3};
  color: ${COLOR.SECONDARY};
  border-radius: 10px;
  border: none;
  padding: 16px 20px;
  font-weight: 500;
`;
export const BattonGroup = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: " . . c d ";
`;
export const ButtonCancel = styled.button`
  grid-area: c;
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.GRAPHITE};
  padding: 16px;
  ${Typography.S3};
  cursor: pointer;
`;
export const ButtonSave = styled.button`
  grid-area: d;
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.PRIMARY};
  padding: 16px;
  ${Typography.S3};
  cursor: pointer;
`;
