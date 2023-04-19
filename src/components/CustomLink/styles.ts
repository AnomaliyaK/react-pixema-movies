import { Link, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "ui";

type isActive = { $isActive: PathMatch<string> | null };

export const StyledCustomLink = styled(Link)<isActive>`
  color: ${({ $isActive }) => ($isActive ? COLOR.PRIMARY : COLOR.SECONDARY)};
  fill: ${({ $isActive }) => ($isActive ? COLOR.PRIMARY : COLOR.SECONDARY)};

  &:hover {
    color: ${COLOR.PRIMARY};
    fill: ${COLOR.PRIMARY};
  }
`;
