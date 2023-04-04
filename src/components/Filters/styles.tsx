import styled from "styled-components";
import { COLOR, Typography } from "ui";

export const StyledFilters = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
  width: 518px;
  min-height: 100vh;
  padding: 48px 40px;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.DARK};
`;
export const FormFilters = styled.form`
  display: grid;
  gap: 111px;
  grid-template-rows: 36px 1fr 56px;
  height: 100%;
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
  text-align: end;
  background-color: ${COLOR.DARK};
  border: none;
  cursor: pointer;
`;
export const InputGroup = styled.div`
  display: grid;
  gap: 24px;
`;

export const SubTitle = styled.div`
  margin-bottom: 8px;
  ${Typography.S3};
`;

export const BattonGroup = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "  a b ";
`;

export const ButtonClearFilter = styled.button`
  grid-area: a;
  padding: 16px;
  ${Typography.S3};
  background-color: ${COLOR.GRAPHITE};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
export const ButtonShowResults = styled.button`
  grid-area: b;
  padding: 16px;
  ${Typography.S3};
  background-color: ${COLOR.PRIMARY};
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const StyledError = styled.p`
  margin-top: 10px;
  ${Typography.S2}
  color:${COLOR.ERROR}
`;
