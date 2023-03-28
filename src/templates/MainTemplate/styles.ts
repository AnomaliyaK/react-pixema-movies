import styled from "styled-components";
import { COLOR } from "ui/color";

export const StyledMainTemplate = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  padding: 40px 62px 64px;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.WHITE};
`;

export const GroupNavLogo = styled.div`
  position: fixed;
  width: 266px;
  height: 100%;
`;

export const SearchInput = styled.input`
  width: 1184px;
  height: 56px;
  position: fixed;
  margin-left: 306px;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${COLOR.SECONDARY};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
`;
export const OpenModalButton = styled.button`
  margin-left: 1400px;
  position: fixed;
  padding: 16px;
  background-color: ${COLOR.GRAPHITE};
  border: none;
  cursor: pointer;
`;
export const GroupLink = styled.div`
  display: grid;
  position: fixed;
  gap: 20px;
  grid-template-columns: repeat(2, 50%);
  margin-left: 1550px;
  width: 266px;
  font-size: 16px;
  color: ${COLOR.WHITE};
  text-align: center;
`;
export const SignInLink = styled.span`
  padding: 16px;
  border-radius: 10px;
  background-color: ${COLOR.PRIMARY};
`;
export const SignUpink = styled.span`
  padding: 16px;
  border-radius: 10px;
  background-color: ${COLOR.PRIMARY};
`;
