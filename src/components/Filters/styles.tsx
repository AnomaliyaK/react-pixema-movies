import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledFilters = styled.div`
  width: 518px;
  background-color: ${COLOR.DARK};
  color: ${COLOR.WHITE};
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100vh;
  padding: 48px 40px;
  z-index: 99;
`;
export const FormFilters = styled.form`
  height: 100%;
  display: grid;
  gap: 111px;

  grid-template-rows: 36px 1fr 56px;
  /* grid-template-rows: repeat(5, 1fr); */
`;

export const TitleGroup = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "  c c c d ";
`;

export const Title = styled.span`
  grid-area: c;
  ${Typography.H2}
`;
export const CloseFilterButton = styled.button`
  grid-area: d;
  background-color: ${COLOR.DARK};
  border: none;
  text-align: end;
  cursor: pointer;
`;
export const InputGroup = styled.div`
  display: grid;
  gap: 24px;
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "  a b ";
`;

export const ButtonClearFilter = styled.button`
  grid-area: a;
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.GRAPHITE};
  padding: 16px;
  ${Typography.S3};
  cursor: pointer;
`;
export const ButtonShowResults = styled.button`
  grid-area: b;
  border-radius: 10px;
  border: none;
  background-color: ${COLOR.PRIMARY};
  padding: 16px;
  ${Typography.S3};
  cursor: pointer;
`;

export const StyledError = styled.p`
  margin-top: 10px;
  ${Typography.S2}
  color:${COLOR.ERROR}
`;
