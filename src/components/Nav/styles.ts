import styled from "styled-components";
import { COLOR, MEDIA, Typography } from "ui";

export const Navigation = styled.nav`
  display: grid;
  gap: 40px;
  ${Typography.S1};

  ${MEDIA.$_1024} {
    ${Typography.S3};
  }
`;
export const CustomWrap = styled.div`
  display: grid;
  grid-template-columns: 35px 1fr;
`;

export const Title = styled.span`
  text-align: start;
`;

export const UserInfoWrap = styled.div`
  height: 56px;
`;
export const WrapThema = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  ${Typography.S1};

  ${MEDIA.$_1024} {
    ${Typography.S3};
    color: ${COLOR.SECONDARY};
  }
`;
