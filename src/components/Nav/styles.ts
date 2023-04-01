import styled from "styled-components";
import { Typography } from "ui";
import { COLOR } from "ui/color";
import { MEDIA } from "ui/media";

export const Navigation = styled.nav`
  display: grid;
  gap: 40px;
  ${Typography.S1};
  color: ${COLOR.SECONDARY};
  ${MEDIA.$_1024} {
    ${Typography.S3};
  }
`;
export const CustomWrap = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
`;

export const Title = styled.span`
  color: ${COLOR.SECONDARY};
`;
