import styled from "styled-components";
import { COLOR, MEDIA, Typography } from "ui";

export const StyledFormSettings = styled.div`
  grid-area: a;
  width: 100%;
  height: 100%;
`;
export const Form = styled.form`
  display: grid;
  gap: 40px;
  height: 100%;
`;
export const Title = styled.h2`
  margin-bottom: 16px;
  ${Typography.H2};
`;
export const ProfileGroup = styled.div`
  display: grid;
  gap: 0 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: " e f ";
  padding: 40px;
  background-color: ${COLOR.DARK};
  border-radius: 10px;
  ${MEDIA.$_768} {
    gap: 32px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      " e "
      " f ";
  }
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
  padding: 40px;
  background-color: ${COLOR.DARK};
  border-radius: 10px;
  ${MEDIA.$_768} {
    gap: 32px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      " x "
      " y "
      "z";
  }
`;
export const PasswordGroupInput = styled.div`
  grid-area: x;
`;
export const NewPasswordGroup = styled.div`
  grid-area: y;
  margin-bottom: 24px;
  ${MEDIA.$_768} {
    margin-bottom: 0;
  }
`;
export const ConfirmPasswordGroup = styled.div`
  grid-area: z;
`;
export const SubTitle = styled.div`
  margin-bottom: 8px;
  ${Typography.S3};
`;
export const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  ${Typography.S3};
  font-weight: 500;
  color: ${COLOR.SECONDARY};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
`;
export const BattonGroup = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: " . . c d ";
  ${MEDIA.$_1024} {
    grid-template-areas: " c c d d ";
  }
`;
export const ButtonCancel = styled.button`
  grid-area: c;
  padding: 16px;
  ${Typography.S3};
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.GRAPHITE};
  cursor: pointer;
`;
export const ButtonSave = styled.button`
  grid-area: d;
  padding: 16px;
  ${Typography.S3};
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.PRIMARY};
  cursor: pointer;
`;
export const ErrorMessage = styled.p`
  color: ${COLOR.ERROR};
  ${Typography.S3};
`;
